import React, { type PropsWithChildren, useContext } from 'react'
import Context from '@/presentation/contexts/layout-context'

type ColProps = {
  size?: NumericRange<CreateArrayWithLengthX<1>, 12>
}

type RowProps = {
  maxCols?: number
}

export const Row = ({ children, maxCols }: PropsWithChildren & RowProps) => {
  return (
    <div className="flex w-full">
      <Context.Provider value={{ maxCols }}>{children}</Context.Provider>
    </div>
  )
}

export const Col = ({ size, children }: PropsWithChildren & ColProps) => {
  const { maxCols } = useContext<{ maxCols: number }>(Context)
  return size && maxCols ? (
    <div className={`w-${size}/${maxCols} p-1`}>{children}</div>
  ) : (
    <div className="w-full p-1">{children}</div>
  )
}

type CreateArrayWithLengthX<
  LENGTH extends number,
  ACC extends unknown[] = []
> = ACC['length'] extends LENGTH
  ? ACC
  : CreateArrayWithLengthX<LENGTH, [...ACC, 1]>

type NumericRange<
  START_ARR extends number[],
  END extends number,
  ACC extends number = never
> = START_ARR['length'] extends END
  ? ACC | END
  : NumericRange<[...START_ARR, 1], END, ACC | START_ARR['length']>
