type innerText = {
    Number: string;
    Pula: string;
}

const PriceS = () => {
    const Models: innerText[] = [
        {Number: "iPhone 6/6S", Pula: "P350"},
        {Number: "iPhone 7/7+", Pula: "P400"},
        {Number: "iPhone 8", Pula: "P400"},
        {Number: "iPhone 8+", Pula: "P450"},
        {Number: "iPhone X/XS", Pula: "P600"},
        {Number: "iPhone XR", Pula: "P600"},
        {Number: "iPhone XS Max", Pula: "P700"},
        {Number: "iPhone 11", Pula: "P700"},
        {Number: "iPhone 11 Pro", Pula: "P800"},
        {Number: "iPhone 11 Pro Max", Pula: "P900"},
        {Number: "iPhone 12", Pula: "P1 000"},
        {Number: "iPhone 12 Pro", Pula: "P1 100"},
        {Number: "iPhone 12 Pro Max", Pula: "P1 200"},
        {Number: "iPhone 13", Pula: "P1 200"},
        {Number: "iPhone 13 Pro", Pula: "P1 600"},
        {Number: "iPhone 13 Pro Max", Pula: "P2 800"},
        {Number: "iPhone 14", Pula: "P1 850"},
        {Number: "iPhone 14 Pro", Pula: "P2 200"},
        {Number: "iPhone 14 Pro Max", Pula: "P3 500"},
        {Number: "iPhone 15", Pula: "P3 000"},
    ]

  return (
    <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200">
            <thead className="ltr:text-left rtl:text-right">
            <tr className="*:font-medium *:text-gray-900">
                <th className="px-3 py-2 whitespace-nowrap">Phone Model</th>
                <th className="px-3 py-2 whitespace-nowrap">Price in Pula</th>
            </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 *:even:bg-gray-50">
                {Models.map((v) => (
                    <tr className="*:text-gray-900 *:first:font-medium">
                        <td className="px-3 py-2 whitespace-nowrap">{v.Number}</td>
                        <td className="px-3 py-2 whitespace-nowrap">{v.Pula}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default PriceS
