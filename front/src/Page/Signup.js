import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const Navigate = useNavigate() 
  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    console.log('Form submitted:', { firstName, lastName, email, password })
    // Here you would typically send the data to your server
    Navigate("/profile")
  }

  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '300px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontFamily: 'Arial, sans-serif'
    },
    label: {
      marginTop: '10px',
      marginBottom: '5px',
      fontSize: '14px',
      fontWeight: 'bold'
    },
    input: {
      padding: '8px',
      borderRadius: '3px',
      border: '1px solid #ccc',
      fontSize: '14px'
    },
    button: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
      marginTop: '20px',
      fontSize: '16px',
      fontWeight: 'bold'
    },
    title: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '20px'
    }
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.title}>Sign Up</h2>
      
      <label htmlFor="firstName" style={styles.label}>First Name</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={styles.input}
        required
      />

      <label htmlFor="lastName" style={styles.label}>Last Name</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        style={styles.input}
        required
      />

      <label htmlFor="email" style={styles.label}>Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
        required
      />

      <label htmlFor="password" style={styles.label}>Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
        required
      />

      <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={styles.input}
        required
      />

      <button type="submit" style={styles.button}>Sign Up</button>
    </form>
  )
}