import { NextResponse } from "next/server"

export async function GET(request){
    return NextResponse.json({
       
    })
}

export async function POST(request){
    const{title, description} = await request.json()
    console.log(title, description)
    console.log(request)
    return NextResponse.json({
        message: "Submitted Successfully"
    })
}