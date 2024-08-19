import { StyledIcon } from './styles';
import { IconProps } from './types';


const Icon: React.FC<IconProps> = ({ $iconName, $size, ...props }) => {
  return (
    <StyledIcon className="material-icons" $size={$size} {...props}>
      {$iconName}
    </StyledIcon>
  );
};

export default Icon;
