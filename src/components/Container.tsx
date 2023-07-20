const Container = ({children}: any) => {
    return (
        <div className="mx-auto max-w-1200 max-lg:max-w-[860px] max-md:max-w-[500px] px-2 max-phone:max-w-[330px]">
            {children}
        </div>
    )
}

export default Container