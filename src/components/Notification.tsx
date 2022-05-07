import { Snackbar, Alert, AlertColor } from '@mui/material';

interface IProps {
    open: boolean
    type: AlertColor
    text: string
    onClose: () => void
    duration?: number
}

const Notification: React.FC<IProps> = (props) => {
    return (
        <Snackbar
            open={props.open}
            autoHideDuration={props?.duration ?? 3000}
            onClose={props.onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert
                severity={props.type}
            >
                { props.text }
            </Alert>
        </Snackbar>
    )
}

export default Notification;