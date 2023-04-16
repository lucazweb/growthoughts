import { type Step } from '@/domain/models/goal'
import React, { useState } from 'react'
import { Col } from 'react-flexbox-grid'
import { FaPlusCircle, FaTimesCircle } from 'react-icons/fa'
import { Row } from '../grid'
import { Checkbox } from '../checkbox/checkbox'
import { InputFloatingLabel } from '../input-floating-label/input-floating-label'

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
      <Row>
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
            <ul>
              {list.map((item, i) => (
                <li key={i} className="flex gap-3" data-testid="item">
                  {isCheckList && <Checkbox label={item.name} disabled />}
                  <FaTimesCircle
                    data-testid="item-remove-button"
                    onClick={() => {
                      handleDelete(item)
                    }}
                    className="text-gray-400 hover:text-red-500 cursor-pointer"
                  />
                </li>
              ))}
            </ul>
          ) : (
            <span data-testid="list-placeholder">Nada aqui ainda..</span>
          )}
        </Col>
      </Row>
    </>
  )
}
