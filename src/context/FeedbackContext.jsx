import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This is rating number one.",
            rating: 10
        },
        {
            id: 2,
            text: "This is rating number two.",
            rating: 7
        },
        {
            id: 3,
            text: "This is rating number three.",
            rating: 8
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete the item?')){
            setFeedback(feedback.filter((item) => item.id != id))
        }
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} :  item))
        setFeedbackEdit({item: {}, edit: false})
    }
    const editFeedback = (item) => {
        setFeedbackEdit({ item, edit: true })
    }
    return <FeedbackContext.Provider value = {{
        feedback,
        feedbackEdit,
        addFeedback, 
        deleteFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext