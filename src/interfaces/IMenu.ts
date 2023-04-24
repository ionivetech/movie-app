export interface IMenu {
  type: string
  label: string
  menus: {
    href: string
    label: string
  }[]
}
