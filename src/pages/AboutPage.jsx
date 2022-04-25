import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h2>About this Page</h2>
            <p>This is a feedback app for leaving a review about a product or service.</p>
            <p>Version 1.0.0</p>

            <p><Link to="/">Back to Home</Link></p>
        </div>
    </Card>)
}

export default AboutPage