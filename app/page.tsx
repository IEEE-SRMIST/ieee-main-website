"use client";

import React from 'react';
import Navbar from './components/Home/Navbar/Navbar';
import Hero from './components/Home/Hero/Hero';
import GallerySlide from './components/Home/GallerySlide/GallerySlide';
import AboutClub from './components/Home/AboutClub/AboutClub';
import QuickLinks from './components/Home/QuickLinks/QuickLinks';
import PopularEvents from './components/Home/PopularEvents/PopularEvents';
import LatestNews from './components/Home/LatestNews/LatestNews';
import FeaturedActivities from './components/Home/FeaturedActivities/FeaturedActivities';
import RecentBlogs from './components/Home/RecentBlogs/RecentBlogs';
import Testimonial from './components/Home/Testimonial/Testimonial';
import FAQ from './components/Home/FAQ/FAQ';
import SponsorList from './components/Home/SponsorList/SponsorList';
import Footer from './components/Home/Footer/Footer';

import '../app/globals.css';
import EventTimeline from './components/Home/PopularEvents/EventTimeline';

function HomePage() {
  return (
    <div>

      <Hero />
      <AboutClub />
      <QuickLinks />
      <GallerySlide />
      <EventTimeline />
      <RecentBlogs />
      <Testimonial />
      <FAQ />
      <SponsorList />
      <LatestNews/>
      <Footer />
    </div>
  );
}

export default HomePage;