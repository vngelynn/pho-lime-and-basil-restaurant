"use client"
import React from "react"
import { MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card"
import logo from "@/assets/images/logo.jpg"
import Image from "next/image"
import grassBackground from "@/assets/images/grass_background.png"
import limeBasilBg from "@/assets/images/lime-basil-bg.png"
import { BlackLabel } from "@/components/blackLabel"
import { FixedNavbar } from "@/components/FixedNavbar"

export default function Home() {
  return (
    <div className='min-h-screen bg-[#d5c6b8]'>
      <FixedNavbar />
      {/* Hero Section */}
      <div
        className='bg-cover bg-center py-16'
        style={{ backgroundImage: `url(${grassBackground.src})` }} // Accessing the .src property
      >
        <div className='container mx-auto px-4 py-16 flex flex-col items-center justify-center '>
          <Image
            src={logo}
            alt='logo'
            height={400}
            width={400} // Must define width when using height in Next.js
            className='rounded-full'
          />
          <BlackLabel text='Authentic Vietnamese Cuisine' />
        </div>
      </div>

      {/* About Section */}
      <div className='container mx-auto px-4 py-20' id='about'>
        <div className='max-w-4xl mx-auto'>
          <div className='relative bg-white shadow-xl rounded-xl overflow-hidden'>
            {/* Decorative Green Wall Element */}
            <div
              className='absolute right-0 top-0 w-1/3 h-full bg-emerald-700 opacity-10'
              style={{
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0L24.171 8.485 26.343 10.657l7.9-7.9h-.828zm5.656 0L29.828 8.485 32 10.657l7.9-7.9h-2.83zm5.657 0L35.485 8.485 37.657 10.657l7.9-7.9h-2.83zm5.657 0L41.142 8.485 39.728 9.9l7.9-7.9h-2.83zm5.657 0L46.8 6.485 45.384 7.9l7.9-7.9h-2.83zm5.657 0L52.456 6.485 51.04 7.9l7.9-7.9h-2.83zM59.2 0L53.8 5.4 52.384 6.814l7.9-7.9h-1.084zM0 0c2.416 0 4.77.125 7.243.356L0 7.6V0zm0 11.373l13.43-13.43C14.7.434 16.142.223 17.557.112L0 17.67v-6.297zm0 5.657l19.086-19.087c1.31-.18 2.674-.32 4.084-.418L0 23.328v-6.298zM0 28.98L24.742-5.742c1.53-.085 3.045-.127 4.528-.127L0 34.637v-5.657zm0 5.657L29.27-11.27c1.748 0 3.457.068 5.13.196L0 40.294v-5.657zm0 5.657L34.398-16.398c1.62.105 3.21.253 4.77.442L0 45.95v-5.656zm0 5.657L39.527-21.528c1.42.168 2.808.377 4.166.623L0 51.608v-5.657zm0 5.657L43.657-25.657c1.307.254 2.584.542 3.83.864L0 57.265v-5.657zm0 5.657L47.787-29.787c1.115.302 2.207.634 3.276.995L0 62.923v-5.657zM.585 64l49.7-49.7c.945.323 1.872.672 2.778 1.044L.585 64zm5.656 0 45.63-45.63c.84.343 1.658.712 2.457 1.102L6.241 64zm5.656 0 41.103-41.103c.704.346 1.388.71 2.052 1.096L11.897 64zm5.657 0 36.398-36.398c.61.35 1.198.72 1.77 1.106L17.554 64zm5.657 0 31.243-31.243c.52.348.998.71 1.46 1.09L23.211 64zm5.657 0 25.83-25.83c.43.343.84.7 1.23 1.07L28.868 64zm5.657 0 19.93-19.93c.34.338.65.686.94 1.044L34.525 64zm5.657 0 13.654-13.654c.25.329.486.67.7 1.02L40.182 64zm5.657 0L50-7c.146.316.282.637.403.962L45.839 64zm5.657 0L50.818-0.818A19.09 19.09 0 0 1 51 0L51.495 64z" fill="%23aaa" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E")',
              }}
            />

            <div className='relative gap-8 p-12'>
              <div className='space-y-6'>
                <h2
                  className='text-3xl font-light text-stone-800'
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Welcome to Phở <i>Lime & Basil</i>
                </h2>
                <p className='text-stone-600 leading-relaxed'>
                  Savor the authentic flavors of Vietnam in the heart of
                  Huntington Beach. Our restaurant blends modern elegance with a
                  warm, inviting atmosphere, serving freshly prepared Vietnamese
                  dishes for an enjoyable dining experience.
                </p>
                <div className='pt-4'>
                  <div className='bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded'>
                    <h3 className='text-xl font-semibold text-yellow-800 mb-2'>
                      Opening March 2025
                    </h3>
                    <p className='text-yellow-700'>
                      We're excited to become Huntington Beach's newest
                      Vietnamese restaurant! Stay tuned for our grand opening
                      announcement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className='flex flex-col mx-auto px-4 gap-8 pt-20'
        style={{
          backgroundImage: `url(${limeBasilBg.src})`,
          backgroundSize: "35%", // Adjust to make it smaller
          backgroundRepeat: "repeat", // Ensures the pattern repeats
        }}
        id='visit'
      >
        {/* <h2
          className='flex self-center text-3xl font-light text-stone-800'
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Visit Us
        </h2> */}
        <BlackLabel text='Visit Us' size='text-xl' />

        {/* Info Cards */}
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-6 max-w-3xl mx-auto'>
            {/* Location Card */}
            <Card className='bg-white shadow-lg'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-black'>
                  <MapPin className='h-5 w-5 text-green-600' />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600'>
                  6100 Warner Ave. Ste. 105
                  <br />
                  Huntington Beach, CA 92647
                </p>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className='bg-white shadow-lg'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-black'>
                  <Clock className='h-5 w-5 text-green-600' />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600'>
                  Open Daily
                  <br />
                  Monday - Sunday: 11:00 AM - 10:00 PM
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className='container mx-auto px-4 pb-16'>
          <div className='max-w-3xl mx-auto'>
            <Card className='bg-white shadow-lg'>
              <CardHeader>
                {/* <CardTitle className='text-2xl font-bold text-gray-800'>
                Visit Us
              </CardTitle> */}
              </CardHeader>
              <CardContent>
                <div className='aspect-video w-full'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.5441649655473!2d-118.0319697!3d33.7271675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd262e11111111%3A0x11111111111111!2s6100%20Warner%20Ave%20%23105%2C%20Huntington%20Beach%2C%20CA%2092647!5e0!3m2!1sen!2sus!4v1665432123456!5m2!1sen!2sus'
                    className='w-full h-full rounded-lg'
                    style={{ border: 0 }}
                    allowFullScreen=''
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    title='Restaurant Location Map'
                  />
                </div>
                <div className='mt-4 text-center'>
                  <a
                    href='https://www.google.com/maps/dir/?api=1&destination=6100+Warner+Ave+Ste+105,+Huntington+Beach,+CA+92647'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-green-600 hover:text-green-700 font-medium font-semibold'
                  >
                    Get Directions →
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-stone-900 text-white py-12'>
        <div className='container mx-auto px-4 text-center'>
          <h2
            className='text-2xl font-light'
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            PHỞ <i>LIME & BASIL</i>
          </h2>
          <p className='text-stone-400'>
            © {new Date().getFullYear()} Phở <i>Lime & Basil</i>. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
