import './normalize.css';
import Layout from './components/Layout';


export default function App() {
  return (
    <Layout
      left = {
        <div>left side</div>
      }
      right = {
        <div>right side</div>
      }
    />
  )
}

