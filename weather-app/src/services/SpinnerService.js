import { BallTriangle } from 'react-loader-spinner';

export const BallTriangleLoader = () => {

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="purple"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
                strokeWidthSecondary={2}
            />
        </div>
    )
}