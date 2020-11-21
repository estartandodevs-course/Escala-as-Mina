export const Button = (props) => {
    const { name, image } = props;

    return (
        <>
            <img src={image} alt={name} />
            <span>
                {name}
            </span>
        </>
    )
}