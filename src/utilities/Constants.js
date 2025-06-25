import { useAppContext } from "../context/AppContext"

export const useConstants = () => {
  const { company } = useAppContext()
  return {
    companyName: company.name,
    companyTagline: company.tagline,
  }
}

// For backward compatibility
export const companyName = "OrderAI"
export const companyTagline = "Effortless Ordering, Powered by AI"
