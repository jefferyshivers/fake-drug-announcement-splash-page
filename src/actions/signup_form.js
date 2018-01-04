export const updateField = (field, value) => {
  return {
    type: "UPDATE_FIELD",
    field: field,
    value: value
  }
}

export const toggleField = (field) => {
  return {
    type: "TOGGLE_FIELD",
    field: field
  }
}