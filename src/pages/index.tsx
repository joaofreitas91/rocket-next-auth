import { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const data = { email, password }
    await signIn(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name="password"
      />
      <button type="submit">Submit</button>
    </form>
  )
}
