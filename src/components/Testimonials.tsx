const testimonials = [
  {
    company: { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2hMO_0KJVvBkv33I3jfjNAY6FjsbY6yKvddJjcdXToYK-LIREwa-EGQjbjDUhK8Azrr89ad18IA2CkiGufEujf0t8z9yh5atbnc-WbTyCzl5J8B3l8YWw2puBQYvzG6HsD9TvXGCPxAPCS091Kve9lNrd03bFQ0UeV0j-P7T5aFB3-StNR3gg_DbvTmLsfpgDbHiQcagie4sqx5UWY8um-knFU9cHbBW6SUWazr-3A1kIjpveo4E7QeBi4BMtnI_PYebIFzvd_Uw', alt: 'Zoom' },
    headline: 'Found my dream internship fast.',
    quote: '"As a student, timing is everything. JobNova\'s real-time updates meant I applied to openings right when they went live. The global coverage helped me land a remote internship with Zoom, something I might have missed entirely without the platform."',
    avatar: { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjHWvTVf5Z-8iD2_X_a6SsFxwEbSdF9erycA38WKsOf-fRxPVSUSNdMrbyhsSumH15hzn34k0111PZpmmLeji7lCUHJUMBsfBlooujn4YkrnrGcUunHzo88rvDN1eFhhWuVb74CkCdFD-P14GoXCxrN8EMTb_dIdXeCKrqIsxug0Wn-EFTmz3S6i9wFaSAuSWbmquebU4qsPLqxWaRPp99VqTkcu4Tdyb4NW_6rpB51Sbw-TFTvyIWODIENe0Tr0YqPCbDp3mI48o', alt: 'Liam' },
    name: 'Liam Thompson',
    role: 'Software Developer (Intern)',
  },
  {
    company: { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4vvpgHKIUR8PoL4iDmVzoIMALfHBqGV_hASFWH9Si5tEUkrjLPVP1WdJb4S3N-qArbmdX1X6CScpS4nZfvZKXicNb0oaLCTrXVZ26foKDqVRaJJHqKWNFFAAJIx6F9HUetge_Ab1hWK7nJUZP8MVQcyLSfHZ0sdIvunz4hXWtSvUQC_M6GApJg_uYQsT4Nefz6PF1nLSRNY8NyhOEvnB1y1xYz1LCbAxAbhffTl40FynhpUxY1hggSG4EkX8vhz7cchN3-CxJzxE', alt: 'Canva' },
    headline: 'Precision that saves you time.',
    quote: '"I\'ve used job boards before, but nothing compares to JobNova\'s accuracy. The match percentages were spot-on. Within two weeks, I was interviewing for positions that aligned perfectly with my design background."',
    avatar: { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCx_1jla1l90mCleTexVwExreSl8RoLki5ZpNe8lH9g51R-UWmiQqcUOAj2p4lWMIGH9OAolFXBzH30wnfwr-BDK6rUwHfR93S6tbKJ6COgl98bMAJbWlgSTzyNF18esyYVqMlNs06bVkxPOYBDB4YLy62IcCS-1xNa5BqSZLBCGDWbHiuKcFNm45OoSELo8OasPIXE9PslnyyTL61UYJzhrpM6-97FYD3lnfplfn7XlVPk3fL_eBbej5xDDaVv3oX8Pt7W1sSOra8', alt: 'Emily' },
    name: 'Emily Carter',
    role: 'UI/UX Designer (Full time)',
  },
  {
    company: { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjPO9rd3OSnroYMgh8dRVWZG8DBUfEWghRfGqdlmNFlSnbdaHidVJrzS3M0ZxhlgRQdyGk0DfiYhUsIJRczSMAlqM77g_KslIbJJhNzrnwitr1DcDKb-yq5FtsAxJSzVi-PGc_vGrF581jnEw1BHjSY0oGzI22EUvbNNt2gHHI38JNhEd1PvaWbuqFdkBlDwqUyp3ozF7kXfE4qSOhFgLNYyU15LCGkL8_kElH1yqpWEvnU7QxwlW3WUADC7dksfgRDLuk-e5BOjQ', alt: 'Microsoft' },
    headline: 'The most efficient job hunt ever.',
    quote: '"With JobNova, I no longer had to juggle multiple job sites. It pulled the most relevant openings into one place and kept them updated in real time. I secured my role at Microsoft in less than a month."',
    avatar: { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8X9fN_UTMTLjx6wIvJ3rjVRD9fYQz9YDHzglxWgrPVnYLhoA_pFOeCf1cB8H6iUW9wo5_uk_VGDJdT9Sn4XomPD1mSu25QtOINAw65a1G4FulwPzYFt4scOThG9MzHaaTZlDyP9EocJKzs871MwN46P21aZ1T6f3cL7A5qmZuN8wcCBusx8vOvwlCcMAbZLfk7CAxFwteSWv5r5MqNQPf8pwYZS86LtmoeRs40nvwOZcqgwNeRNxtT_OIpPce0BFqu9kP103r0b0', alt: 'Sofia' },
    name: 'Sofia Martinez',
    role: 'Software Developer (Full time)',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">

        <div className="section-header section-header--center">
          <p className="section-label">✦ Testimonials</p>
          <h2 className="section-title">Trusted by Talent Worldwide</h2>
          <p className="section-body section-body--center">Real success stories from our community.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`testimonial-card scroll-fade d${i + 1}`}>
              <div className="testimonial-top">
                <img src={t.company.src} alt={t.company.alt} className="testimonial-company" />
                <div className="testimonial-stars">★★★★★</div>
              </div>
              <p className="testimonial-headline">{t.headline}</p>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <img src={t.avatar.src} alt={t.avatar.alt} className="testimonial-avatar" />
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
