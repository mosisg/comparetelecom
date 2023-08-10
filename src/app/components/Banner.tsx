import Image from 'next/image'

const Banner = () => {
  return (
    
<div className="section-hero">
    <div className="ph_container">
      <div className="ph_bg__hero" />
      <div className="ph_container__child section-hero_content grid-col-2">
        <div className="home-punchline">
          <ul className="secondary-menu__pill">
            <li>
              <a
                href="#"
                title="Page: Forfaits cellulaires - Comparer les meilleurs forfaits mobile"
                className="btn_link__pill active"
              >
                Mobile
              </a>
            </li>
            <li>
              <a
                href="#"
                title="Page: Forfaits Internet - Comparatif des Meilleures offres"
                className="btn_link__pill"
              >
                Internet
              </a>
            </li>
          </ul>
          <h1 className="bold">
            Trouver un forfait cellulaire devrait être facile
          </h1>
          <h2 className="heading4 subtitle normal">
            Comparez les forfaits mobiles les moins chers qui correspondent à
            vos besoins.
          </h2>
          <div id="btnFindPlan">
            <a
              href="#"
              className="btn_basic btn_primary"
              title="Rechercher"
              aria-label="Trouvez votre forfait"
            >
              Trouvez votre forfait
              <span className="icon ph-icon-long_right" />
            </a>
          </div>
        </div>
        <div className="ph_img__cover">
          <figure className="post__image">
            <Image
              src="/fondnice.png"
              width={500}
              height={498}
              alt="banner"
              className="lazy bannier"
            />
          </figure>
        </div>
      </div>
      <div id="topPlansDiv">
        <section className="section-top-plans section_item__spacer ph_container">
          <div className="ph_container__child">
            <div className="section_item__heading ph_center">
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
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
    
  )
}

export default Banner