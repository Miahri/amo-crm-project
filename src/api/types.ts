export type Deal = {
  id: number
  name: string
  budget: number
  taskDate: string
}

export type DealsState = {
  deals: Deal[]
  selectedDeal: Deal | null;
  loading: boolean
  error: string | null
}

export type AuthState = {
  accessToken: string | null;
  loading: boolean;
  error: string | null;
}