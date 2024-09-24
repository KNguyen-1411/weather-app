import { NextRequest, NextResponse } from 'next/server';

const baseUrl = process.env.API_BASE_URL;
const Apikey = process.env.API_KEY;
const MeteoUrl = process.env.API_URL_METEO;

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|logo.png|500).*)',
    ],
};

const checkConnect = async () => {
    try {
        const [response1, response2] = await Promise.all([
            fetch(`${baseUrl}/weather?appid=${Apikey}&q=hue`, {
                method: 'GET',
            }),
            fetch(
                `${MeteoUrl}?latitude=16.4637&longitude=107.5909&daily=uv_index_max&timezone=Asia%2FBangkok`,
                { method: 'GET' },
            ),
        ]);
        return response1.ok && response2.ok;
    } catch (error) {
        return false;
    }
};

export async function middleware(request: NextRequest) {
    const isErrorPage = request.nextUrl.pathname === '/500';
    const isConnect = await checkConnect();

    if (isConnect && isErrorPage) {
        return NextResponse.redirect(new URL('/', request.url));
    }
    if (!isConnect) {
        return NextResponse.redirect(new URL('/500', request.url));
    }
    return NextResponse.next();
}
