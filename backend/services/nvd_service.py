import requests

def search_software(query):

    url = "https://services.nvd.nist.gov/rest/json/cpes/2.0"

    try:

        response = requests.get(
            url,
            params={
                "keywordSearch": query,
                "resultsPerPage": 10
            },
            timeout=20
        )

        print("Search Status:", response.status_code)

        if response.status_code != 200:

            print(response.text)

            return []

        data = response.json()

        products = []

        for item in data.get("products", []):

            try:

                products.append(
                    str(item)
                )

            except:
                pass

        return products

    except Exception as e:

        print("Search Error:", e)

        return []

def get_cves(software_name):

    url = "https://services.nvd.nist.gov/rest/json/cves/2.0"

    try:

        response = requests.get(
            url,
            params={
                "keywordSearch": software_name,
                "resultsPerPage": 10
            },
            timeout=20
        )

        print("Status:", response.status_code)

        if response.status_code != 200:

            print("Response:", response.text)

            return []

        data = response.json()

        vulnerabilities = []

        for item in data.get("vulnerabilities", []):

            cve = item["cve"]

            vulnerabilities.append({
                "cve_id": cve["id"],
                "description":
                cve["descriptions"][0]["value"]
            })

        return vulnerabilities

    except Exception as e:

        print("CVE Error:", e)

        return []