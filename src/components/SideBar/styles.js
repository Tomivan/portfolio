import styled from 'styled-components'
import { SideNav} from 'carbon-components-react/lib/components/UIShell'

export const styledSideNav = styled(SideNav)`
@media (max-width: 640px) {
  display: none;
}
`