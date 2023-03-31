import React from 'react'
import { UserCardInfo, UserCardWrapper } from './styled'

type Props = {
  user: {
    image: string
    name: string
    role?: string
  }
  onClick?: () => void
}

export const UserCard = ({
  user,
  onClick,
}: Props & React.PropsWithChildren) => {
  return (
    <UserCardWrapper data-testid="user-card" onClick={onClick}>
      <img
        src={user.image}
        alt="aji"
        className="align-self flex-grow-0 w-24 h-24 object-cover rounded-md"
      />

      <UserCardInfo>
        <div
          data-testid="user-card-name"
          className="w-full flex-none text-lg text-gray-600 font-bold leading-none"
        >
          {user.name}
        </div>

        {user.role && (
          <div className="flex-auto text-gray-400 my-1">
            <span data-testid="user-card-role" className="mr-3 ">
              {user.role}
            </span>
            <span className="mr-3  max-h-0"></span>
          </div>
        )}
      </UserCardInfo>
    </UserCardWrapper>
  )
}
