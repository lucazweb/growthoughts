/* eslint-disable quotes */
import { type Metric, type Step } from '@/domain/models/goal'
import React, { useState } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { FaInfoCircle, FaPlusCircle, FaTimesCircle } from 'react-icons/fa'
import { InputFloatingLabel } from '../input-floating-label/input-floating-label'
import { List, ListItem } from './styled'
import { Datepicker } from '../datepicker/datepicker'
import { format, parseISO } from 'date-fns'
import placeholder from './check_time.svg'
import pt from 'date-fns/locale/pt-BR'

export type ListDateMakerProps = {
  list: Metric[]
  isCheckList?: boolean
  inputPlaceholder?: string
  itemValidation?: {
    regex: RegExp
    errorMessage: string
  }
  handleUpdate?: (list: Metric[]) => void
}

export const ListDateMaker = ({
  list,
  isCheckList,
  itemValidation,
  inputPlaceholder,
  handleUpdate,
}: ListDateMakerProps) => {
  const [item, setItem] = useState<Partial<Metric>>({ name: '' })
  const [picker, setPicker] = useState(false)
  const [error, setError] = useState<string>()

  const minNameLength = 4

  const handleDelete = (item: Step) => {
    const updated = list.filter((i) => i.name !== item.name)
    if (handleUpdate) handleUpdate(updated)
  }

  const update = () => {
    if (handleUpdate) {
      if (itemValidation) {
        if (!itemValidation.regex.test(item.name)) {
          setError(itemValidation.errorMessage)
          return
        }
      }

      if (!list.find((i) => i.name === item.name)) {
        handleUpdate([
          ...list,
          { name: item.name, date: item.date, isComplete: false },
        ])
        setItem({ name: '' })
      }
    }
  }

  return (
    <>
      <Row>
        <Col md={12}>
          <Row className="border-b border-dashed border-gray-200 mb-4">
            <Col md={12}>
              <Row className="items-center">
                <Col md={11} className="flex gap-6 items-center">
                  <div className="">
                    {picker ? (
                      <Datepicker
                        data-testid="start-date-input"
                        open={!!picker}
                        selected={item.date ? parseISO(item.date) : undefined}
                        onChange={(date: Date) => {
                          console.log(date)
                          setItem({ ...item, date: date.toISOString() })
                          setPicker(false)
                        }}
                      />
                    ) : (
                      <span
                        data-testid="item-date-label"
                        className="cursor-pointer text-gray-500 items-center hover:text-blue-600 flex gap-3  "
                        onClick={() => {
                          setPicker(true)
                        }}
                      >
                        {item.date
                          ? format(
                              parseISO(item.date),
                              "dd 'de' MMMM 'de' yyyy",
                              {
                                locale: pt,
                              }
                            )
                          : 'Selecione a data'}
                        <FaInfoCircle color="#999" />
                      </span>
                    )}
                  </div>
                  <div style={{ width: '60%' }}>
                    <InputFloatingLabel
                      data-testid="item-name-input"
                      label={inputPlaceholder}
                      autoComplete="off"
                      value={item.name}
                      onKeyDown={(e) => {
                        if (
                          e.key === 'Enter' &&
                          item.name.length >= minNameLength
                        )
                          update()
                      }}
                      onChange={(e) => {
                        setItem({ ...item, name: e.target.value })
                      }}
                      errorMessage={error}
                    />
                  </div>
                </Col>
                <Col md={1}>
                  <button
                    data-testid="item-add-button"
                    className="disabled:cursor-not-allowed disabled:text-gray-500 text-green-700"
                    onClick={update}
                    type="button"
                    disabled={!item.name || item.name.length < minNameLength}
                  >
                    <FaPlusCircle size={32} />
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          {list.length > 0 ? (
            <List
              style={{
                listStyle: 'disc',
              }}
            >
              {list.map((item, i) => (
                <ListItem key={i} data-testid="item">
                  <span className="gap-4 flex ">
                    <strong>
                      {format(parseISO(item.date), "dd 'de' MMMM 'de' yyyy", {
                        locale: pt,
                      })}
                    </strong>
                    <span>{item.name}</span>
                  </span>

                  <FaTimesCircle
                    data-testid="item-remove-button"
                    onClick={() => {
                      handleDelete(item)
                    }}
                    className="text-gray-400 hover:text-red-500 cursor-pointer"
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <>
              <span
                data-testid="list-placeholder"
                className="text-gray-500 italic"
              >
                Nada aqui ainda..
              </span>
              <img
                className="mt-8 opacity-30"
                src={placeholder}
                alt="placeholder"
              />
            </>
          )}
        </Col>
      </Row>
    </>
  )
}
