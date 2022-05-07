import { Paper } from '@mui/material';
import { ArrowRight } from '@mui/icons-material';
import style from './index.module.css';
import { useNavigate } from 'react-router-dom';

interface IProps {
    icon: React.ReactNode
    text: string
    ifShowRightIcon: boolean
    jumpPath: string
}

const JumpShowPaperComponent: React.FC<IProps> = (props) => {
    
    const navigate = useNavigate();
    const handleJumpClick = () => {
        navigate(props.jumpPath);
    }
    
    return (
        <Paper
            className={style['jump-show-paper-container']}
            elevation={4}
            onClick={handleJumpClick}
        >
            <div className={style['paper-content']}>
                <div className={style['paper-content-left']}>
                    <div className={style['paper-content-left-icon']}>
                        {props.icon}
                    </div>
                    <div>{props.text}</div>
                </div>
                <ArrowRight
                    style={{
                        display: props.ifShowRightIcon ? 'block' : 'none',
                    }}
                    className={style['paper-content-right-icon']}
                />
            </div>
        </Paper>
    )
}

export default JumpShowPaperComponent;