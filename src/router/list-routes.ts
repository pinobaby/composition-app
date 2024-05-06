export interface RouterLink {
  name: string
  path: string
  title: string
  visible: boolean
}

export const routerLinks: RouterLink[] = [
  { name: 'home', path: '/', title: 'Home', visible: true },
  { name: 'about', path: '/about', title: 'About', visible: true },
  { name: 'counter', path: '/counter', title: 'Counter', visible: true },
  { name: 'pokemons', path: '/pokemons', title: 'Pokemons', visible: true }
]
