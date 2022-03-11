function HomeComponent(props: { firstProp: string }) {
    return (
        <div>
            { props.firstProp }
        </div>
    )
}

interface IProps {
    firstProp: string
}
props: IProps;

const t = TMyType<typeof HomeComponent>;
