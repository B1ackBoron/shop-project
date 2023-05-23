type ContentType = {
    text1: string
    text2: string
}

export const Content = ({ text1, text2 }: ContentType) => {
    return (
        <>
            <p className="red">{text1}</p>
            <p>{text2}</p>
        </>
    )
}
