import Image from "next/image"
import { VFC } from "react"

export const DropdownContent: VFC = () => {
  const style = { "--value": 20 } as React.CSSProperties

  return (
    <ul
      tabIndex={0}
      className="top-3/4 left-2 p-2 w-96 shadow dropdown-content menu bg-base-100 rounded-box"
    >
      <div className="flex px-4 pt-4 pb-0 border-b border-gray-200 prose">
        <figure className="p-0 m-0">
          <Image src="/孟.png" alt="H" width={60} height={60} />
        </figure>
        <div className="px-4 h-fit">
          <h2 className="m-0">daisyUI</h2>
          <p>
            Created by
            <a
              href="https://github.com/hajimexxxNakagawa/"
              target="_blank"
              rel="noreferrer"
              className="pl-1 link"
            >
              Hajime
            </a>
          </p>
        </div>
      </div>
      <li className="border-b border-gray-200">
        <a className="hover:active ">
          <span>
            <h3>Total messages</h3>
            <p>You can only access your most recent 10k messages.</p>
          </span>
          <div className="w-32 radial-progress text-info" style={style}>
            1.2k
          </div>
        </a>
      </li>
      <li>
        <a className="hover:active">Invite People</a>
      </li>
      <li className="border-b border-gray-200">
        <a className="hover:active">Create a channel</a>
      </li>
      <li>
        <a className="hover:active">Preferences</a>
      </li>
      <li className="border-b border-gray-200">
        <a className="hover:active">Setting & administration</a>
      </li>
      <li className="border-b border-gray-200">
        <a className="hover:active">Tools</a>
      </li>
      <li className="border-b border-gray-200">
        <a className="hover:active">Sign in on mobile</a>
      </li>
      <li>
        <a className="hover:active">Sign out</a>
      </li>
    </ul>
  )
}
