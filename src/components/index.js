import { Sidebar } from './Sidebar';
import { Button } from './Button';
import { Card } from './Card';
import { ListItem } from './ListItem';
import { Input, InputPlayer, InputSearch } from './Input';
import { Typography } from './Typography';
import { Layout } from './Layout';
import { Modal } from './Modal';
import { FlexContainer } from './Modal/styledModal';
import { Notification } from './Notification';
import { Stepper } from './Stepper';
import { CreatePlayer } from './CreatePlayer';

const InputColor = (props) => {
  const { onChange, position } = props;
  return (
    <input
      type="color"
      onChange={(event) => onChange(position, event.target.value)}
    />
  );
};

export {
  Sidebar,
  Button,
  Card,
  ListItem,
  Input,
  InputPlayer,
  InputSearch,
  Typography,
  Layout,
  Modal,
  Notification,
  Stepper,
  InputColor,
  FlexContainer,
  CreatePlayer,
};
