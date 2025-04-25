import React from "react";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { Routes, Route } from "react-router-dom";
import HomePage from "./../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactUsPage from "./../../pages/ContactUsPage/ContactUsPage";
import PrivatePolicy from "./../../pages/Terms/PrivatePolicy/PrivatePolicy";
import TermsCondition from "./../../pages/Terms/TermsCondition/TermsCondition";
import OfferSection from "../../pages/OffersPage/OfferSection/OfferSection";
import PartnerWithUsPage from "../../pages/PartnerWithUsPage/PartnerWithUsPage";
import CareersPage from "../../pages/CareersPage/CareersPage";
import WhatsNewPage from "../../pages/WhatsNewPage/WhatsNewPage";
import SustainablePage from "../../pages/WhatsNewPage/WhatsNewSectionChild/SustainablePage";
import WeddingsPage from "../../pages/WhatsNewPage/WhatsNewSectionChild/WeddingsPage";
import MediaRoom from "../../pages/Terms/MediaRoom/MediaRoom";
import OursHotels from "../../pages/OursHotels/OursHotels";
import OursHotelsSubNavbarRooms from "../../pages/OursHotels/OursHotelsSubNavbarPages/OursHotelsSubNavbarRooms/OursHotelsSubNavbarRooms";
import OursHotelsSubNavbarOffres from "../../pages/OursHotels/OursHotelsSubNavbarPages/OursHotelsSubNavbarOffres/OursHotelsSubNavbarOffres";
import OursHotelsSubNavbarConfrenceEvent from "../../pages/OursHotels/OursHotelsSubNavbarPages/OursHotelsSubNavbarConfrenceEvent/OursHotelsSubNavbarConfrenceEvent";
import OursHotelsSubNavbarContactUs from "../../pages/OursHotels/OursHotelsSubNavbarPages/OursHotelsSubNavbarContactUs/OursHotelsSubNavbarContactUs";
import OursHotelsSubNavbarDining from "../../pages/OursHotels/OursHotelsSubNavbarPages/OursHotelsSubNavbarDining/OursHotelsSubNavbarDining";
import OursHotelsSubNavbarFacilities from "../../pages/OursHotels/OursHotelsSubNavbarPages/OursHotelsSubNavbarFacilities/OursHotelsSubNavbarFacilities";
import OursHotelsSubNavbarGallery from "../../pages/OursHotels/OursHotelsSubNavbarPages/OursHotelsSubNavbarGallery/OursHotelsSubNavbarGallery";
import OursHotelsSubNavbarGarden from "../../pages/OursHotels/OursHotelsSubNavbarPages/OursHotelsSubNavbarGarden/OursHotelsSubNavbarGarden";
import OursHotelsSubNavbarLocation from "../../pages/OursHotels/OursHotelsSubNavbarPages/OursHotelsSubNavbarLocation/OursHotelsSubNavbarLocation";
import OursHotelsSubNavbarPayUs from "../../pages/OursHotels/OursHotelsSubNavbarPages/OursHotelsSubNavbarPayUs/OursHotelsSubNavbarPayUs";
import OursHotelsSubNavbarSpa from "../../pages/OursHotels/OursHotelsSubNavbarPages/OursHotelsSubNavbarSpa/OursHotelsSubNavbarSpa";
import OursHotelsSubNavbarRoomsDetails from "../../pages/OursHotels/OursHotelsSubNavbarPages/OursHotelsSubNavbarRooms/OursHotelsSubNavbarRoomsDetalis";
import OursHotelsSubNavbarDiningDetails from "../../pages/OursHotels/OursHotelsSubNavbarPages/OursHotelsSubNavbarDining/OursHotelsSubNavbarDiningDetails";

const WebsitePage = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

const RouteComponent = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <WebsitePage>
              <HomePage />
            </WebsitePage>
          }
        />
        <Route
          path="/about-us"
          element={
            <WebsitePage>
              <AboutPage />
            </WebsitePage>
          }
        />
        <Route
          path="/contact-us"
          element={
            <WebsitePage>
              <ContactUsPage />
            </WebsitePage>
          }
        />
        <Route
          path="/offers"
          element={
            <WebsitePage>
              <OfferSection />
            </WebsitePage>
          }
        />
        <Route
          path="/private-policy"
          element={
            <WebsitePage>
              <PrivatePolicy />
            </WebsitePage>
          }
        />
        <Route
          path="/terms-conditions"
          element={
            <WebsitePage>
              <TermsCondition />{" "}
            </WebsitePage>
          }
        />
        <Route
          path="/partner-with-us"
          element={
            <WebsitePage>
              <PartnerWithUsPage />
            </WebsitePage>
          }
        />
        <Route
          path="/careers"
          element={
            <WebsitePage>
              <CareersPage />
            </WebsitePage>
          }
        />
        <Route
          path="/whats-new"
          element={
            <WebsitePage>
              <WhatsNewPage />
            </WebsitePage>
          }
        />
        <Route
          path="/whats-new/sustainable"
          element={
            <WebsitePage>
              <SustainablePage />
            </WebsitePage>
          }
        />

        <Route
          path="/whats-new/weddings"
          element={
            <WebsitePage>
              <WeddingsPage />
            </WebsitePage>
          }
        />
        <Route
          path="/media-room"
          element={
            <WebsitePage>
              {" "}
              <MediaRoom />{" "}
            </WebsitePage>
          }
        />
        <Route
          path="/:hotelSlug"
          element={
            <WebsitePage>
              <OursHotels />
            </WebsitePage>
          }
        />
        <Route
          path="/:hotelSlug/rooms"
          element={
            <WebsitePage>
              <OursHotelsSubNavbarRooms />
            </WebsitePage>
          }
        />
        <Route
          path="/:hotelSlug/rooms/:roomName"
          element={
            <WebsitePage>
              <OursHotelsSubNavbarRoomsDetails />
            </WebsitePage>
          }
        />

        <Route
          path="/:hotelSlug/offers"
          element={
            <WebsitePage>
              <OursHotelsSubNavbarOffres />
            </WebsitePage>
          }
        />
        <Route
          path="/:hotelSlug/conferences-and-events"
          element={
            <WebsitePage>
              <OursHotelsSubNavbarConfrenceEvent />
            </WebsitePage>
          }
        />
        <Route
          path="/:hotelSlug/contact-us"
          element={
            <WebsitePage>
              <OursHotelsSubNavbarContactUs />
            </WebsitePage>
          }
        />
        <Route
          path="/:hotelSlug/dining"
          element={
            <WebsitePage>
              <OursHotelsSubNavbarDining />
            </WebsitePage>
          }
        />
        <Route
          path="/:hotelSlug/dining/:diningName"
          element={
            <WebsitePage>
              <OursHotelsSubNavbarDiningDetails />
            </WebsitePage>
          }
        />
        <Route
          path="/:hotelSlug/facilities"
          element={
            <WebsitePage>
              <OursHotelsSubNavbarFacilities />
            </WebsitePage>
          }
        />
        <Route
          path="/:hotelSlug/gallery"
          element={
            <WebsitePage>
              <OursHotelsSubNavbarGallery />
            </WebsitePage>
          }
        />
        <Route
          path="/:hotelSlug/renest-garden"
          element={
            <WebsitePage>
              <OursHotelsSubNavbarGarden />
            </WebsitePage>
          }
        />

        <Route
          path="/:hotelSlug/location"
          element={
            <WebsitePage>
              <OursHotelsSubNavbarLocation />
            </WebsitePage>
          }
        />

        <Route
          path="/:hotelSlug/pay-us"
          element={
            <WebsitePage>
              <OursHotelsSubNavbarPayUs />
            </WebsitePage>
          }
        />
        <Route
          path="/:hotelSlug/spa"
          element={
            <WebsitePage>
              <OursHotelsSubNavbarSpa />
            </WebsitePage>
          }
        />
      </Routes>
    </>
  );
};

export default RouteComponent;
