'use client'
import React, { useEffect, useState } from 'react';
import { fetchOffer } from '@/api/getOffers';
import { OffreIllimiteDocument } from '@/api/models/forfait-illimite';

type OfferClickHandler = (offer: OffreIllimiteDocument) => void;

interface OfferBoxProps {
  offer: OffreIllimiteDocument;
  onClick: OfferClickHandler;
}

function OfferBox({ offer, onClick }: OfferBoxProps) {
  return (
    <div className="proposal_plans__box" onClick={() => onClick(offer)}>
      <div className="proposal_plans__box_details">
        <div className="provider_logo_item">
          <img
            src={offer.Image}
            alt={offer.Fournisseur}
            title={offer.Fournisseur}
            width={150}
            height={75}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/placeholder-image.png'; // Replace with a placeholder image URL
            }}
          />
        </div>
        {/* Other offer details */}
      </div>
    </div>
  );
}

export default function OffreIllimite() {
  const [offers, setOffers] = useState<OffreIllimiteDocument[]>([]);
  const [selectedOffer, setSelectedOffer] = useState<OffreIllimiteDocument | null>(null);

  useEffect(() => {
    async function fetchOffersData() {
      try {
        const offerData = await fetchOffer('offreillimite');
        if (offerData) {
          setOffers((prevOffers) => [...prevOffers, offerData]);
        }
      } catch (error) {
        console.error('Failed to fetch offers:', error);
        // Handle error (show message to user or something)
      }
    }
    fetchOffersData();
  }, []);

  const handleOfferClick: OfferClickHandler = (offer) => {
    setSelectedOffer(offer);
  };

  return (
    <div>
      {selectedOffer ? (
        <div className="selected-offer-details">
          {/* Display selected offer details */}
          <button onClick={() => setSelectedOffer(null)}>Retour</button>
        </div>
      ) : (
        offers.map((offer) => (
          <OfferBox key={offer._id} offer={offer} onClick={handleOfferClick} />
        ))
      )}
    </div>
  );
}

