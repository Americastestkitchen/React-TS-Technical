export type Name = { first: string, last: string }

export type HandleChange = (field: string, value: string) => void

export type HandleNameUpdate = (field: "first" | "last", newName: string) => void

export type TextInputType = {
  value: string,
  field: string,
  handleChange: HandleChange,
}

export type FormData = {
  value: string,
  field: string,
  handleChange: HandleChange,
}

export type DisplayField = { label: string, value: string }