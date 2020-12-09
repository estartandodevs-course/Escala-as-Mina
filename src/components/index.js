export const InputColor = (props) => {
    const {onChange, position} = props;
    return(
        <input type="color" onChange={(event) => onChange(position, event.target.value)} />
    )
}

export { Sidebar } from './Sidebar';
export { Button } from './Button';
export { Card } from './Card';
export { ListItem } from './ListItem';
export { Input, InputPlayer, InputSearch} from './Input';
export { Typography } from './Typography'
export { Layout } from './Layout';
export { Modal } from './Modal';
export { FlexContainer } from './Modal/styledModal';
export { Notification } from './Notification';
export { Stepper } from './Stepper';
