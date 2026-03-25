// Figma node 47-2028 — each logo is composed of SVG vector fragments
// Structure: .coop-logo-wrap (relative, overflow:hidden) > div (absolute inset) > img (fills wrapper)

type VecProps = { src: string; t: string; r: string; b: string; l: string }
function Vec({ src, t, r, b, l }: VecProps) {
  return (
    <div style={{ position: 'absolute', top: t, right: r, bottom: b, left: l }}>
      <img alt="" src={src} style={{ position: 'absolute', display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
    </div>
  )
}

export default function Coop() {
  return (
    <section className="coop">
      <div className="coop-logos">

        {/* Google — 113×48 */}
        <div className="coop-logo-wrap" style={{ width: 113 }}>
          <Vec src="https://www.figma.com/api/mcp/asset/7c3fa273-ab49-49ff-a32a-9c5e0761e473" t="34.18%" r="57.31%" b="27.3%"  l="26.27%" />
          <Vec src="https://www.figma.com/api/mcp/asset/4eeaf045-f536-4c8b-af78-aaff15485009" t="34.18%" r="39.6%"  b="27.3%"  l="43.98%" />
          <Vec src="https://www.figma.com/api/mcp/asset/7a1167c7-c656-42d2-8872-e08f0407f873" t="34.18%" r="22.64%" b="10.04%" l="61.68%" />
          <Vec src="https://www.figma.com/api/mcp/asset/45d8a654-96bc-4334-9377-0787b734c2a9" t="15.07%" r="17.01%" b="28.48%" l="79.49%" />
          <Vec src="https://www.figma.com/api/mcp/asset/a7e712fd-8e49-455d-882f-4bc4a28c44a4" t="34.17%" r="0.41%"  b="27.31%" l="84.5%"  />
          <Vec src="https://www.figma.com/api/mcp/asset/f7e85c39-9172-4c41-9184-610c78cbc878" t="12.87%" r="75.12%" b="27.31%" l="0.12%"  />
        </div>

        {/* Trello — 113×48 */}
        <div className="coop-logo-wrap" style={{ width: 113 }}>
          <Vec src="https://www.figma.com/api/mcp/asset/8abb30d8-0c46-4ae3-9e90-66051900d66a" t="25%"    r="79.97%" b="27.88%" l="0"      />
          <Vec src="https://www.figma.com/api/mcp/asset/fb1c88b8-791b-4ee1-9f2a-dce89fd244f0" t="28.45%" r="58.5%"  b="27.88%" l="27.91%" />
          <Vec src="https://www.figma.com/api/mcp/asset/9e1da53e-1847-4de2-aba4-839bfdcb1bb1" t="37.63%" r="48.64%" b="27.88%" l="43.04%" />
          <Vec src="https://www.figma.com/api/mcp/asset/7ad2020f-0cfc-43eb-a53e-8c68df382543" t="25%"    r="24.66%" b="27.61%" l="69.33%" />
          <Vec src="https://www.figma.com/api/mcp/asset/892ba2f1-4366-4e5e-83e9-de3cb4546f62" t="25%"    r="16.07%" b="27.61%" l="77.91%" />
          <Vec src="https://www.figma.com/api/mcp/asset/d5d7b250-68dc-4c14-9b70-7eb20d0a709a" t="37.43%" r="0.17%"  b="27.08%" l="85.91%" />
          <Vec src="https://www.figma.com/api/mcp/asset/3ea88670-82fb-438d-aba5-aa50b5103efb" t="37.41%" r="33.9%"  b="27.2%"  l="52.89%" />
        </div>

        {/* Productboard — 230×48 */}
        <div className="coop-logo-wrap" style={{ width: 230 }}>
          <Vec src="https://www.figma.com/api/mcp/asset/137de944-3294-4435-b317-e0659047a728" t="55.38%" r="89.18%" b="19.1%"  l="0"      />
          <Vec src="https://www.figma.com/api/mcp/asset/bf8a5933-b7fc-46a8-a4f2-6a825c6605bd" t="29.86%" r="89.18%" b="44.62%" l="0"      />
          <Vec src="https://www.figma.com/api/mcp/asset/8147e7b2-c935-4d5c-a767-625146c68f0f" t="29.86%" r="83.77%" b="19.1%"  l="5.41%"  />
          <Vec src="https://www.figma.com/api/mcp/asset/74dea61d-e519-4143-bcfd-f2bd75bad539" t="25%"    r="0.58%"  b="16.67%" l="21.81%" />
        </div>

        {/* Pendo — 128×48 */}
        <div className="coop-logo-wrap" style={{ width: 128 }}>
          <Vec src="https://www.figma.com/api/mcp/asset/624136cc-a4df-481f-8b5c-a49fa37f9170" t="23.3%"  r="0"      b="16.2%"  l="25%"    />
          <Vec src="https://www.figma.com/api/mcp/asset/b140a374-4527-4e86-a50a-9bdbc0800531" t="30.71%" r="79.17%" b="14.97%" l="0"      />
        </div>

        {/* Airwallex — 168×48 */}
        <div className="coop-logo-wrap" style={{ width: 168 }}>
          <Vec src="https://www.figma.com/api/mcp/asset/aa2fc764-8b97-4ea0-8675-5573acdf8b04" t="25.07%" r="0.18%"  b="27.08%" l="23.25%" />
          <Vec src="https://www.figma.com/api/mcp/asset/65a5df9f-52fc-42a2-9d6c-0a2619b2ffca" t="25%"    r="79.49%" b="27.15%" l="0"      />
        </div>

        {/* Amazon — 110×48 */}
        <div className="coop-logo-wrap" style={{ width: 110 }}>
          <Vec src="https://www.figma.com/api/mcp/asset/771ba3a3-114c-47b5-80d3-d71936f2401a" t="66.48%" r="33.16%" b="6.25%"  l="14.01%" />
          <Vec src="https://www.figma.com/api/mcp/asset/c71b0f02-5c96-44e0-93a4-9894b20f4b6d" t="25%"    r="0.45%"  b="34.39%" l="0"      />
        </div>

      </div>
    </section>
  )
}
