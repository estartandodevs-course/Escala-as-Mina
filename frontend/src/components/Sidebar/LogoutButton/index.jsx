import { Button } from '../../Button'

const logout = {
    image: "path-to-image",
    name: "Sair"
}

export const LogoutButton = () => {
    return (
        <div>
            <img src={logout.image} alt="Sair" />
            <Button name={logout.name} />
        </div>
    )
}