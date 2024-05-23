import { NextResponse } from 'next/server';

export const GET = () => {
  try {
    const date = new Date();

    return new NextResponse(JSON.stringify(date, { status: 404 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify(
        {
          message: `Something went wrong in fetching single post!! ${err.message}`,
        },
        { status: 500 }
      )
    );
  }
};
