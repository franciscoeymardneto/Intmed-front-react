import styled from 'styled-components';

type IconProps = {
    $iconName?: string, 
    $size?: string,
} & React.HTMLAttributes<HTMLSpanElement>

const StyledIcon = styled.span<IconProps>`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: ${(props) => props.$size || '24px'};
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;


const Icon: React.FC<IconProps> = ({ $iconName, $size, ...props }) => {
  return (
    <StyledIcon className="material-icons" $size={$size} {...props}>
      {$iconName}
    </StyledIcon>
  );
};

export default Icon;
