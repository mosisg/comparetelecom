import Image from 'next/image'
import Slide from '../components/Slide'
import Header from '@/app/components/Header'


function Hero () {
  return (

    
<div className="section-hero">
<Header />

    <div className="ph_container">
      <div className="ph_bg__hero" />
      <div id="topPlansDiv">
        <section className="section-top-plans section_item__spacer ph_container">
          <div className="ph_container__child">
            <div className="section_item__heading ph_center">
            <Slide />
              <h2 className="heading2 normal">Meilleur Forfait Cellulaire</h2>
              <span className="paragraph1 subtitle">
                CompareTelecom compare quotidiennement les meileurs des
                Opérateur français. Et voici notre sélection des meilleurs plans
                Jour.
              </span>
            </div>
            <div className="top-plans">
              <div className="proposal_plans">
                <div className="proposal_plans__box">
                  <div className="proposal_plans__box_details">
                    <div className="provider_logo_item">
                      <a
                        href="#"
                        title="Orange les Meilleurs Forfaits Cellulaires"
                      >
                        <Image
                          src="/orange.png"
                          alt="Orange"
                          title="Orange les Meilleurs Forfaits Cellulaires"
                          width={150}
                          height={75}
                        />
                      </a>
                      <div className="ph_reviews__score">
                        <a
                          href="#"
                          title="203 avis"
                          className="reviews heading6"
                        >
                          203 avis
                        </a>
                        <br />
                        <div className="ratings">
                          <div className="empty-stars" />
                          <div
                            className="full-stars"
                            style={{ width: "83.94%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="proposal_plans__details_items heading6">
                      <div>
                        <span className="ph-icon-bar_chart" />5
                        <span className="unit"> Go</span>
                      </div>
                      <div>
                        <span className="ph-icon-phone" /> Appels illimités
                      </div>
                      <div>
                        <span className="ph-icon-location" /> France
                      </div>
                      <div>
                        <span className="ph-icon-tag-outline" /> Orange
                      </div>
                    </div>
                  </div>
                  <div className="proposal_plans__box_price">
                    <div className="price">
                      <div className="heading4 bold">
                        <span>29</span>
                        <span>$</span>
                      </div>
                      <div className="heading6 subtitle appendix">par mois</div>
                    </div>
                    <div
                      className="view-offer-btn-container-mobile"
                      data-providerslug="Bouygues"
                    >
                      <a
                        className="btn btn-primary"
                        role="button"
                        target="_blank"
                        rel="nofollow noopener"
                        href=""
                        title="Visualiser ce forfait cellulaire chez Fizz"
                        
                        data-provider="Bouygues"
                        data-comboslug="national,29,unlimited,5000"
                      >
                        En savoir plus
                      </a>
                      <span
                        className="nativeButtonHiddenElement hide"
                        data-provider="Bouygues"
                      />
                      <Image
                       src="/sfr.png" 
                       height={1} 
                       width={1} 
                       alt="" />
                    </div>
                  </div>
                </div>
                <div className="proposal_plans__box">
                  <div className="proposal_plans__box_details">
                    <div className="provider_logo_item">
                      <a
                        href="#"
                        title="Orange les Meilleurs Forfaits Cellulaires"
                      >
                        <Image
                          src="/free.png"
                          alt="Free"
                          title="Free les Meilleurs Forfaits Cellulaires"
                          width={150}
                          height={75}
                        />
                      </a>
                      <div className="ph_reviews__score">
                        <a
                          href="#"
                          title="203 avis"
                          className="reviews heading6"
                        >
                          203 avis
                        </a>
                        <br />
                        <div className="ratings">
                          <div className="empty-stars" />
                          <div
                            className="full-stars"
                            style={{ width: "83.94%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="proposal_plans__details_items heading6">
                      <div>
                        <span className="ph-icon-bar_chart" />5
                        <span className="unit"> Go</span>
                      </div>
                      <div>
                        <span className="ph-icon-phone" /> Appels illimités
                      </div>
                      <div>
                        <span className="ph-icon-location" /> France
                      </div>
                      <div>
                        <span className="ph-icon-tag-outline" /> Orange
                      </div>
                    </div>
                  </div>
                  <div className="proposal_plans__box_price">
                    <div className="price">
                      <div className="heading4 bold">
                        <span>29</span>
                        <span>$</span>
                      </div>
                      <div className="heading6 subtitle appendix">par mois</div>
                    </div>
                    <div className="view-offer-btn-container-mobile">
                      <a
                        className="btn btn-primary"
                        role="button"
                        target="_blank"
                        rel="nofollow noopener"
                        href=""
                        title="Visualiser ce forfait cellulaire chez Fizz"
                        
                        data-provider="Bouygues"
                        data-comboslug="national,29,unlimited,5000"
                      >
                        En savoir plus
                      </a>
                      <span className="nativeButtonHiddenElement hide" />
                      <Image 
                      src="/sfr.png" 
                      height={150} 
                      width={75} 
                      alt="sfr" />
                    </div>
                  </div>
                </div>
                <div className="proposal_plans__box">
                  <div className="proposal_plans__box_details">
                    <div className="provider_logo_item">
                      <a
                        href="/fr/forfaits-cellulaires-koodo"
                        title="Koodo les Meilleurs Forfaits Cellulaires"
                      >
                        <Image
                          src="/bouygues fpng.png"
                          alt="Bouygues"
                          title="Bouygues les Meilleurs Forfaits Cellulaires"
                          width={120}
                          height={60}
                        />
                      </a>
                      <div className="ph_reviews__score">
                        <a
                          href="#"
                          title="84 avis"
                          className="reviews heading6"
                        >
                          84 avis
                        </a>
                        <br />
                        <div className="ratings">
                          <div className="empty-stars" />
                          <div
                            className="full-stars"
                            style={{ width: "73.35%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="proposal_plans__details_items heading6">
                      <div>
                        <span className="ph-icon-bar_chart" />6
                        <span className="unit"> Go</span>
                      </div>
                      <div>
                        <span className="ph-icon-phone" /> Appels illimités
                      </div>
                      <div>
                        <span className="ph-icon-location" /> France
                      </div>
                      <div>
                        <span className="ph-icon-tag-outline" /> Orange
                      </div>
                    </div>
                  </div>
                  <div className="proposal_plans__box_price">
                    <div className="price">
                      <div className="heading4 bold">
                        <span>39</span>
                        <span>€</span>
                      </div>
                      <div className="heading6 subtitle appendix">par mois</div>
                    </div>
                    <div className="view-offer-btn-container-mobile">
                      <a
                        className="btn btn-primary"
                        role="button"
                        target="_blank"
                        rel="nofollow noopener"
                        href="#"
                        title="Visualiser ce forfait cellulaire chez Koodo"
                        
                        data-provider="Bouygues"
                        data-comboslug="national,39,unlimited,6000"
                      >
                        En savoir plus
                      </a>
                      <span
                        className="nativeButtonHiddenElement hide"
                        data-provider="Bouygues"
                      />
                      <Image 
                      src="/sfr.png" 
                      height={150} 
                      width={75} 
                      alt="sfr" />
                    </div>
                  </div>
                </div>
                <div className="proposal_plans__box">
                  <div className="proposal_plans__box_details">
                    <div className="provider_logo_item">
                      <a
                        href="#"
                        title="Orange les Meilleurs Forfaits Cellulaires"
                      >
                        <Image
                          src="/sfr.png"
                          alt="sfr"
                          title="sfr les Meilleurs Forfaits Cellulaires"
                          width={120}
                          height={60}
                        />
                      </a>
                      <div className="ph_reviews__score">
                        <a
                          href="#"
                          title="84 avis"
                          className="reviews heading6"
                        >
                          84 avis
                        </a>
                        <br />
                        <div className="ratings">
                          <div className="empty-stars" />
                          <div
                            className="full-stars"
                            style={{ width: "73.35%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="proposal_plans__details_items heading6">
                      <div>
                        <span className="ph-icon-bar_chart" />6
                        <span className="unit"> Go</span>
                      </div>
                      <div>
                        <span className="ph-icon-phone" /> Appels illimités
                      </div>
                      <div>
                        <span className="ph-icon-location" /> France
                      </div>
                      <div>
                        <span className="ph-icon-tag-outline" /> Orange
                      </div>
                    </div>
                  </div>
                  <div className="proposal_plans__box_price">
                    <div className="price">
                      <div className="heading4 bold">
                        <span>39</span>
                        <span>€</span>
                      </div>
                      <div className="heading6 subtitle appendix">par mois</div>
                    </div>
                    <div
                      className="view-offer-btn-container-mobile"
                      data-providerslug="koodo"
                    >
                      <a
                        className="btn btn-primary"
                        role="button"
                        target="_blank"
                        rel="nofollow noopener"
                        href="#"
                        title="Visualiser ce forfait cellulaire chez Koodo"
                        
                        data-provider="koodo"
                        data-comboslug="national,39,unlimited,6000"
                      >
                        En savoir plus
                      </a>
                      <span className="nativeButtonHiddenElement" />
                      <img src="#" height={1} width={1} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="proposal_plans">
                <div className="proposal_plans__box">
                  <div className="proposal_plans__box_details">
                    <div className="provider_logo_item">
                      <a
                        href="#"
                        title="Orange les Meilleurs Forfaits Cellulaires"
                      >
                        <Image
                          src="/orange.png"
                          alt="Orange"
                          title="Orange les Meilleurs Forfaits Cellulaires"
                          width={150}
                          height={75}
                        />
                      </a>
                      <div className="ph_reviews__score">
                        <a
                          href="#"
                          title="203 avis"
                          className="reviews heading6"
                        >
                          203 avis
                        </a>
                        <br />
                        <div className="ratings">
                          <div className="empty-stars" />
                          <div
                            className="full-stars"
                            style={{ width: "83.94%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="proposal_plans__details_items heading6">
                      <div>
                        <span className="ph-icon-bar_chart" />5
                        <span className="unit"> Go</span>
                      </div>
                      <div>
                        <span className="ph-icon-phone" /> Appels illimités
                      </div>
                      <div>
                        <span className="ph-icon-location" /> France
                      </div>
                      <div>
                        <span className="ph-icon-tag-outline" /> Orange
                      </div>
                    </div>
                  </div>
                  <div className="proposal_plans__box_price">
                    <div className="price">
                      <div className="heading4 bold">
                        <span>29</span>
                        <span>$</span>
                      </div>
                      <div className="heading6 subtitle appendix">par mois</div>
                    </div>
                    <div
                      className="view-offer-btn-container-mobile"
                      data-providerslug="Bouygues"
                    >
                      <a
                        className="btn btn-primary"
                        role="button"
                        target="_blank"
                        rel="nofollow noopener"
                        href=""
                        title="Visualiser ce forfait cellulaire chez Fizz"
                        
                        data-provider="Bouygues"
                        data-comboslug="national,29,unlimited,5000"
                      >
                        En savoir plus
                      </a>
                      <span
                        className="nativeButtonHiddenElement hide"
                        data-provider="Bouygues"
                      />
                      <Image
                       src="/sfr.png" 
                       height={1} 
                       width={1} 
                       alt="" />
                    </div>
                  </div>
                </div>
                <div className="proposal_plans__box">
                  <div className="proposal_plans__box_details">
                    <div className="provider_logo_item">
                      <a
                        href="#"
                        title="Orange les Meilleurs Forfaits Cellulaires"
                      >
                        <Image
                          src="/free.png"
                          alt="Free"
                          title="Free les Meilleurs Forfaits Cellulaires"
                          width={150}
                          height={75}
                        />
                      </a>
                      <div className="ph_reviews__score">
                        <a
                          href="#"
                          title="203 avis"
                          className="reviews heading6"
                        >
                          203 avis
                        </a>
                        <br />
                        <div className="ratings">
                          <div className="empty-stars" />
                          <div
                            className="full-stars"
                            style={{ width: "83.94%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="proposal_plans__details_items heading6">
                      <div>
                        <span className="ph-icon-bar_chart" />5
                        <span className="unit"> Go</span>
                      </div>
                      <div>
                        <span className="ph-icon-phone" /> Appels illimités
                      </div>
                      <div>
                        <span className="ph-icon-location" /> France
                      </div>
                      <div>
                        <span className="ph-icon-tag-outline" /> Orange
                      </div>
                    </div>
                  </div>
                  <div className="proposal_plans__box_price">
                    <div className="price">
                      <div className="heading4 bold">
                        <span>29</span>
                        <span>$</span>
                      </div>
                      <div className="heading6 subtitle appendix">par mois</div>
                    </div>
                    <div className="view-offer-btn-container-mobile">
                      <a
                        className="btn btn-primary"
                        role="button"
                        target="_blank"
                        rel="nofollow noopener"
                        href=""
                        title="Visualiser ce forfait cellulaire chez Fizz"
                        
                        data-provider="Bouygues"
                        data-comboslug="national,29,unlimited,5000"
                      >
                        En savoir plus
                      </a>
                      <span className="nativeButtonHiddenElement hide" />
                      <Image 
                      src="/sfr.png" 
                      height={150} 
                      width={75} 
                      alt="sfr" />
                    </div>
                  </div>
                </div>
                <div className="proposal_plans__box">
                  <div className="proposal_plans__box_details">
                    <div className="provider_logo_item">
                      <a
                        href="/fr/forfaits-cellulaires-koodo"
                        title="Koodo les Meilleurs Forfaits Cellulaires"
                      >
                        <Image
                          src="/bouygues fpng.png"
                          alt="Bouygues"
                          title="Bouygues les Meilleurs Forfaits Cellulaires"
                          width={120}
                          height={60}
                        />
                      </a>
                      <div className="ph_reviews__score">
                        <a
                          href="#"
                          title="84 avis"
                          className="reviews heading6"
                        >
                          84 avis
                        </a>
                        <br />
                        <div className="ratings">
                          <div className="empty-stars" />
                          <div
                            className="full-stars"
                            style={{ width: "73.35%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="proposal_plans__details_items heading6">
                      <div>
                        <span className="ph-icon-bar_chart" />6
                        <span className="unit"> Go</span>
                      </div>
                      <div>
                        <span className="ph-icon-phone" /> Appels illimités
                      </div>
                      <div>
                        <span className="ph-icon-location" /> France
                      </div>
                      <div>
                        <span className="ph-icon-tag-outline" /> Orange
                      </div>
                    </div>
                  </div>
                  <div className="proposal_plans__box_price">
                    <div className="price">
                      <div className="heading4 bold">
                        <span>39</span>
                        <span>€</span>
                      </div>
                      <div className="heading6 subtitle appendix">par mois</div>
                    </div>
                    <div className="view-offer-btn-container-mobile">
                      <a
                        className="btn btn-primary"
                        role="button"
                        target="_blank"
                        rel="nofollow noopener"
                        href="#"
                        title="Visualiser ce forfait cellulaire chez Koodo"
                        
                        data-provider="Bouygues"
                        data-comboslug="national,39,unlimited,6000"
                      >
                        En savoir plus
                      </a>
                      <span
                        className="nativeButtonHiddenElement hide"
                        data-provider="Bouygues"
                      />
                      <Image 
                      src="/sfr.png" 
                      height={150} 
                      width={75} 
                      alt="sfr" />
                    </div>
                  </div>
                </div>
                <div className="proposal_plans__box">
                  <div className="proposal_plans__box_details">
                    <div className="provider_logo_item">
                      <a
                        href="#"
                        title="Orange les Meilleurs Forfaits Cellulaires"
                      >
                        <Image
                          src="/sfr.png"
                          alt="sfr"
                          title="sfr les Meilleurs Forfaits Cellulaires"
                          width={120}
                          height={60}
                        />
                      </a>
                      <div className="ph_reviews__score">
                        <a
                          href="#"
                          title="84 avis"
                          className="reviews heading6"
                        >
                          84 avis
                        </a>
                        <br />
                        <div className="ratings">
                          <div className="empty-stars" />
                          <div
                            className="full-stars"
                            style={{ width: "73.35%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="proposal_plans__details_items heading6">
                      <div>
                        <span className="ph-icon-bar_chart" />6
                        <span className="unit"> Go</span>
                      </div>
                      <div>
                        <span className="ph-icon-phone" /> Appels illimités
                      </div>
                      <div>
                        <span className="ph-icon-location" /> France
                      </div>
                      <div>
                        <span className="ph-icon-tag-outline" /> Orange
                      </div>
                    </div>
                  </div>
                  <div className="proposal_plans__box_price">
                    <div className="price">
                      <div className="heading4 bold">
                        <span>39</span>
                        <span>€</span>
                      </div>
                      <div className="heading6 subtitle appendix">par mois</div>
                    </div>
                    <div
                      className="view-offer-btn-container-mobile"
                      data-providerslug="koodo"
                    >
                      <a
                        className="btn btn-primary"
                        role="button"
                        target="_blank"
                        rel="nofollow noopener"
                        href="#"
                        title="Visualiser ce forfait cellulaire chez Koodo"
                        data-provider="koodo"
                        data-comboslug="national,39,unlimited,6000"
                      >
                        En savoir plus
                      </a>
                      <span className="nativeButtonHiddenElement" />
                      <img src="#" height={1} width={1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
    
  )
}

export default Hero