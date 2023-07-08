import { type Step } from '@/domain/models/goal'
import React, { useState } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { FaPlusCircle, FaTimesCircle } from 'react-icons/fa'
import { Checkbox } from '../checkbox/checkbox'
import { InputFloatingLabel } from '../input-floating-label/input-floating-label'
import { List, ListItem } from './styled'
import placeholder from './check_option.svg'

export type ListMakerProps = {
  list: Step[]
  isCheckList?: boolean
  inputPlaceholder?: string
  itemValidation?: {
    regex: RegExp
    errorMessage: string
  }
  handleUpdate?: (list: Step[]) => void
}

export const ListMaker = ({
  list,
  isCheckList,
  itemValidation,
  inputPlaceholder,
  handleUpdate,
}: ListMakerProps) => {
  const [item, setItem] = useState<Partial<Step>>({ name: '' })
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
        handleUpdate([...list, { name: item.name, isComplete: false }])
        setItem({ name: '' })
      }
    }
  }

  return (
    <>
      <Row className="items-center">
        <Col md={11}>
          <InputFloatingLabel
            data-testid="item-name-input"
            label={inputPlaceholder}
            autoComplete="off"
            value={item.name}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && item.name.length >= minNameLength)
                update()
            }}
            onChange={(e) => {
              setItem({ ...item, name: e.target.value })
            }}
            errorMessage={error}
          />
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
                  <span>
                    {isCheckList ? (
                      <Checkbox label={item.name} disabled />
                    ) : (
                      <span>{item.name}</span>
                    )}
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
