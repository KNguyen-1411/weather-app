import Link from 'next/link';

export default function Custom500() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="font-bold text-5xl">Lỗi kết nối.</h1>
            <Link href="/" className="mt-6 font-bold text-xl">
                Trở về
            </Link>
        </div>
    );
}
