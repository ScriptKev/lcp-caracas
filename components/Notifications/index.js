import { NotificationsStyled } from './styled'
const { Container, Main, Flex, Icon, Message } = NotificationsStyled

const Notifications = ({ message }) => {
  return (
    <Container>
      <Main>
        <Flex>
          <Icon>

          </Icon>

          <Message>
            {message}
          </Message>
        </Flex>
      </Main>
    </Container>
  )
}

export default Notifications
