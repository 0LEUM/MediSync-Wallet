<img width="100%" src="./Frontend/src/assets/Banner.png" alt="pro-banner" />

<!-- <p align="center">
    <img height="50px" src="./docs/img/nextdotjs.svg" alt="Next Js">
    <img height="50px" src="./docs/img/reactquery.svg" alt="React Query">
    <img height="50px" src="./docs/img/remix.svg" alt="Remix">
    <img height="50px" src="./docs/img/react.svg" alt="React Js">
    <img height="50px" src="./docs/img/reactrouter.svg" alt="React Router">
</p> -->

<br>

<p align="center">
    <em>This project aims to efficiently manage and monitor patient health records, fostering improved doctor-patient and pharmacist-patient relationships. It serves the dual purpose of enhancing communication and thwarting fraudulent practices by verifying the credentials of healthcare professionals, thus ensuring a safer and more transparent healthcare ecosystem.</em>
</p>

---

<!-- <p align="center">
    <em>Looking for our hosted site <a href="">Try This →</a></em>
</p> -->


# **Introduction**

### <u>**Purpose**</u>

This document details the specifications for Medi Sync Wallet, aiming to provide a comprehensive health card to patients. It involves roles such as Admin, User, Doctor, Medical Assistant, and Pharmacist, covering user registration, doctor-patient interactions, prescription management, and pharmacy transactions.

### <u>**Scope**</u>

Medi Sync Wallet streamlines healthcare processes by digitizing and maintaining patient records, enabling communication among healthcare professionals. It includes features like medicine subscription, emergency services, and smartwatch support.

### <u>**Definitions**</u>

* Admin: System administrator with the highest access.
* User: Individuals with a health card, able to view their medical history.
* Doctor: Healthcare professionals managing patient checkups and complaints.
* Medical Assistant: Handles prescriptions, issues digital prescriptions, and adds new users.
* Pharmacist: Dispenses medicines, generates bills, and manages transactions.
#
# **Workflow**
> It is a basic workflow diagram made for our project...

<img width="100%" src="./Frontend/src/assets/flow-diagram.png" alt="flow-diagram" />

<img width="100%" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.drawio#R7V1Zd6O4Ev41OWfmITkgEMsjsbHjM4md9pJM5uUeEhPH3Y7JYKeTzK%2B%2FbGIVi0GAcNwPaSMECKnqq0VVxRnXe%2F0cmtrby42x1DdngFl%2BnnH9MwAkhpGs%2F%2ByWL7cFMJLXsjLXS7eNCRpm6%2F90t5FFre%2Frpb7z2tymvWFs9uu3aOOTsd3qT%2FtIm2aaxke027OxWUYa3rSVHhmG3TB70jZ6otv9erl%2F8V4Mhnpf6evVC3oyy3hnXjXU2WvYvWhL4yPUxKlnXM80jL376%2FWzp2%2Fs2YvOyyDlrD8wU9%2Fui1zw9t%2FwL%2FbH8z%2Fj%2B93t4H%2F9jzvhRjz3B7f%2FQm%2BsL60J8A4Nc%2F9irIyttlGD1kvTeN8udfu2jHUU9Lk2jDerkbUaf%2Br7%2FZe3mtr73rCaXvavG%2B%2Bs%2Frne%2F21ffgG9o4fQmf6nd2fn4AsdbPfmV%2Bgi%2B%2FAhfC64zDlC1%2B32pvHLXzvBanneGB%2FKdm0t0NrYes99Xm82PWNjmM4ccEuoS0veal%2BZ2nJt3TB0ThaXjCj6dw6dYRhZZuxnJpfGW62d8W4%2B6RnrwXIejWvmSt9ndRTcjvZqhR7hLf1QN151axasDqa%2BsV70d5ScNY8rVn6%2FgHCsHx7t4Onot6j%2BXLzMrl5%2FPbDjH%2Bp6Me5NzgWpEh2xFekoREUBTdVORzGa0XTp%2BQlPM6KuCTqDpxlxMBikUOXTu%2Fnb57MmiIqniqjEauBUkahYGojqWVvKS4gjnF6PYRywoYJwRLoIh20VjS4ApWJNZy3BhhVdgsAwvV4LlMNJpCnHuVQxTe0r1OHNWG%2F3u9Cdb%2B0Gq4OnqXKSN2BfT%2BWjylSsP0AUX7I%2F9NTgtP48ELL6Wz%2FcNwx4xJ%2BqCmzDtcs2YitsEwdcQWKwknowkNIB9%2Bf76xuaJ818aoORZCoYiUeaYEHGEBBWl%2BzPsiI4iJPiF1Rmpcxl%2B61t3r2ZPgPCxlrAy0frx2rvEIXb8Gw4433ySU34991wO3DPzr9wU4g7UaN9g%2FOdw1%2BK1YFn3j7d2%2FsXuQ%2B8ngxHY%2FRU67XcB0cHYzWHBhhDgyivf7ys9%2FrsTXPo98Oy%2F6N8nWQ1jPKLdJgoE%2FrtqXzzWzf3%2BmcmnSNk55nI%2BqPDj8CaZ5Gi%2BRKy5CWmJuWErWYqHY3JnW4KVUBLPomW%2BEVoTWHNHDcGLhpDhwQ%2BLWbqFA8LKQjSGlrk0U1xtLBWAsQEkpwEDABAEjBYRqjLnIFt6mVRO1gsaghHACPAjxTISOpP1fx26b45UnqZUBBpeDoMHFEAMTHIZapN8f6sxQhE1aZb%2Bf79h%2F6%2B%2FfcHFDcvjDASlr1z0KpoLOPwYQ%2Bj82JUneQGLA3VTLlyG3R6zgswQnicd5xGqIkLBJYsoWZOIkZg7960LVlBXE4VcK%2FtT3rziSXGmVH%2FIM3fb3NfJ9q8XP%2BON9H11odbOpnvazVHXrk1RSdvf6m4ogMEOVfN4ZAVG1FzIAHDCL8XWc39dLyGke%2FqrwD6YhL08YsA6DKMxI7grNK%2FIYM4LWFLPo0dgC2%2B8yTLhmJwThepLmwR2zSh6NEs07GFkF2E8CMfaFrba8YPp12vXAcIpAmagHTRhHwCDcpAg66oJ1hNqpw01gNpoiEHW7VIuFZpolzQUpcFCXYROMqUC9ARK2awuL62rlF6PXU2O1kzeGsGcgWtmfpcJVy7AW6lQKZZwUNKM8FsKONXhKELcdI3lOlCHOSfrtE1XWZY9U2WMpuNhuMSb5Y9lGftdb35cgfzamyNnQurdkhAbKhopIyFf%2FtzbbNebd0TO4vI96FTLiLbZ7aGh87W70ft6dfKgZJzb0btHuvter%2FWNilTAOMZQtAiZbvVyX7xjxBpQ4e4rZa%2B%2FdtOUYE2%2BUKLI%2FL6sn5fxO6lbgOC27gc5J%2Bx%2F9jrYTV4KwLRmqA%2B7vvbHYKZt44Up6tDKPa5aE%2FnaBX67T3iMXzClc4wkM9BP%2Be1HtPu4pxFow13AJjh%2B0LabmCdriFBbTc6xGC3O7Ih6BaaNFe6FlkW%2F5S%2FIgFYQlsIB4viCGJ0n6%2FghCOQUbsrlIOLmNA5TzgHz4ahkxYG%2BydWoSHEScY59Okm3BilZq9fguzzdppSAPDYNqBYUYg5iSXMDhTfrFp1ij%2Boz3aDHdWkYEc0qRu1P%2Bop199ol99WpWZzZTyvb6e%2FQzMx7EzAQ0yq%2BLlH8cTJrbHVve4IgnfGxubWDJFVh2jCWfxNi6Z2c3PKiKaYxe9LKsotfkx4XCfkVFci0m6vlOmN0rOQ%2B5uJqu4AdGGDwM%2BJqwN1JbZ91BU6h7q1GATxPGLuKTVJ8hKKBNEYgWw%2BGtO148Od4o26QjjEY05Kxb2zQIyin8Bkx70nL%2BCYGNnWEPeOphWjZTjyCCNv427mJ2stdTNT5KbK7gyXdb5fOu4ILy75Z4vLm9G8hJhOfZHQEM3Vo%2FaHNa29M8dXGf7vz9C4Tw7%2Bk4P%2F5OA%2FBgd%2Fc56VPq%2ByA0hIPefiThGYVM8BVj1nCajn%2BFir7jlFYloWaEvNyilY4hcrzNTCCOtMCR1H5qLFRHgWRm%2FhqoHeVRnKEoyF8HBAvIBM8C82MldpTNz2UJ1O4jjs8NNGGe%2FPeVkL9Rb9qWbiHs2eV5IhDmeqFhlFxFLa4YwiRtMCJSl2I0pYA42rXtY4eiOeUNmFBs36wvF4dJTDqkrnLN9ENjua1QpWfWBbNhdKd6dOR4OR2qfOf57wkufJh%2BJquBwrZ%2BVr5Y1o4Vjq4flWNQhqsmAI6gv5OFg0mobnSONgNb94ejRNGtI0iSjjSRkvX0bQyAk56UFOFN2X5b%2BAOOQU6vJfgJPpVa5KcQXglJLAia8Q2BZu4kdTjVQ6YIo0UtA6rbBWrZRERwE4Fkbr4MYs6Nz%2BqC5ivRb30SNiekxbhhhsHBHxqiTx5PtWCFngm7CopVQ9l67AtCBqXHu1tbPt4%2B4tqu19g9C8%2BcXZqUAe%2BbB5SoIU8zGyfNk8iQEXMGFG4AvnCTAdCattgx670CwZGp4fnZovHOWCSh5dlYvQsKkXP98yGJykpOlowtJxFmglGQ4flzQsB7jCokauzdffain6Q3z9pT9CQTadiLz%2FHW%2FlBJs%2BfvxwjAYI7dyzDIzGGrAMDzINMHvXM%2FOKekwwPv0TPHRhYV%2B9VucqCTCs1Rfvc0atuZcykC%2Bi9dwlgPPTQwzqxSmenJ%2F%2BVBwUj5YE3E88Jt8S7wKnK9%2BS70q%2BpdL%2FTo6NK2Xcv5%2BO5nO1dvcG9XNxO1Vnvenodj6adEbXrtF3c86BqGSBgpDUp%2FE7wHW5blA%2B1UmyVJIsWTu4FAuWrGFTL1dGs9mCiNbaETTtj4ajeVBf59E8wWwxmE3xkTcMtO1%2BXIZeoD3MSY6vwN1NoO1KiVRni3Y0VpPIMxzd2WouM58kz8W%2B3kmnT4GkwzSBOywjt6%2FfneK2cmDncD9r1v5bCxhUyot6zgsxn2gs0SP%2FColtIDuwgeKHHiRmB36Xq97so9vl6Po6B%2FVSALJpVbVKsWr%2FtYbqWJ0qEZ9yxVdu3gPSBFn8oSxs0cksbq8nSv%2FP%2Bqarw0KU41oXot1Lw2QuZFmOylEeSjmS1Dm61c21NWt2gZyWxGu1OJjWynDhpf3pk6K1udeKhr8TT8StRBFdicv9Xrs2Y%2FXeFsOETNauO9AkORphgc3xlWWMCAagLiA95fjWBqRFRStl7rMmQ0ydfNUHmvxW5PJSE%2BwOodQ6u1cL8ztedj8sdT%2BTjfP5nbIU1PTSn%2BQZvkTFzVoZnmQlvQTDizBpYjfN8F3ZdVb%2FjpAFndsaJAMiE9QiQ75tavGx7iQe4pGw4mAwqCYexILiAdClDqJxU48gdyPb2KQeQfII6QAEYVHuvp%2FLL4EkhCC0iIZUC3WRi1wJQio6ddHvA526dqHQ6OZobv1Wsk7d0sX0qkENZZYnqOaMaDAJqS3xQ4hAQFFTBWEHLQTSGfO1PT2j%2BNq2VkEOvxlYLRenMvOLZbg%2FJjWOjPvJOyrKxdSwgI2ZSkzkkyiYKxgBVryCZdgGShGDZpwvB5VfLKN8u1Ep1st45Wbcv1bLVCWll3dky%2Bthspha19zaLz5ZzOrb92pkPmonnP6kN590dXeQsDUnw1iKrCAmXUKcyGLsudpidEC1IJ2TS6iAdp2vqhGv0FaNJkAjQqs6uLDnlo47gNR7hQYDgn5lVmTFGI7IqGZCe34h0GTVBs6Ob46se8sLLDH2EhMTFDG3Hw3L22TW%2FFT9sVDtylLYBJnZYjh0z44DxTM4nVA4Wud9kqQhyiBqxfibRe2pEFw1l%2FDxqhAixykVU%2FRw303Bd2ytkB0%2BnLhafvzxunp9miDk7ClOIHTpmB39dE0VbVUZK9cP%2FxBMva%2FXFi5cPS8f5g6pnsdGy6FR8LXKirXzTvKtgNjKz0%2BhazcDVZGiX77RIqcKLzRdmUglPnzUdTl1p%2FSUce%2BhPjl13NM3VW8nU4JlkRvOSSXnqUrIcpHHREBiZTnSDsnjdqsRkOXClyKSvK5NaBKyvGhFSPTRW1ogPt23dawY1R%2FNVGVWoyly3NPXLYg%2FoAw6QfCXYfSLuGJhQ64%2B8AcnQ6428C8ak8oR%2F6xaNfBPD38%2FVvS6vxr1rk7QT6nk7Ix6zwFUpo0ehM%2F4fBvNBDkYjfvfgvN6i2lecavWeYTkXj7HcVEtSJaTFVVZVM66IS0oPVKDZtKpBNrdDkKU5dpcMizDiAVBu779le%2B3FRgvDdsxkiT6vSwZlc2giCRhtfpjxxu%2BcKnIKq%2BcEdsW4otWI%2BPpKkeGcvlPBEILgUC6cl35JgvW9a7U3l8HCY2WPIw%2BdZAQHECK6TKslFSuAYMRHJJUFyycQkVyYKECEhT%2BpC9d9ZfQuDum3t4p15Hv3VKpiBLFEyb2JU6Wk9pXRNv9RvhRAwosmicNAVWAAtNzimkGlNH4%2B0EKH1dRaICU9JJxNJNPFXdLt%2Fbr69yVT8g4ARWBaJEgQScJsj%2Ba3YxmM9rJh%2BR2RhLPaiUf69A07EXwzw2t93%2B5MZa63eP%2F" />

#
# 💭**Inspiration**
Certainly, here are the key points outlining the inspiration behind Medicine Wallet :

* Identifying a Crucial Need:
    * Recognizing a pressing need within the healthcare sector for a consolidated platform facilitating efficient communication and record-keeping among patients and healthcare professionals.

* Simplifying Healthcare Processes:
    * Medicine Wallet emerges from the goal to simplify healthcare procedures, offering an accessible system for users to manage medical records, prescriptions, and transactions seamlessly.

* User-Centric Approach:
    * Conceived with a user-centric vision, Medicine Wallet strives to provide a hassle-free experience for patients while empowering healthcare professionals in their daily workflows.

* Addressing Healthcare Challenges:
    * Acknowledging the challenges inherent in healthcare management, Medicine Wallet is designed to address them, promoting efficiency, accessibility, and streamlined interactions.

* Enhancing Convenience:
    * By bridging the gap between patients and healthcare providers, Medicine Wallet seeks to enhance overall convenience, fostering a harmonious relationship in the healthcare journey.

* Tailored Healthcare Expertise:
    * Medicine Wallet facilitates the discovery of specialized healthcare professionals, ensuring users connect with experts suited to their unique medical needs.

* Empowering Healthcare Professionals:
    * In the spirit of empowerment, Medicine Wallet offers healthcare professionals a platform to expand their reach, showcase their expertise, and connect with a broader audience, ultimately contributing to an enriched healthcare ecosystem.

#
# 💡**What problem does the project solve?**

* Limited Access to Comprehensive Healthcare:

    * Problem: Difficulty in accessing comprehensive healthcare services, leading to fragmented medical records and communication.
    * Solution: Medicine Wallet ensures centralized access to patient records, streamlining interactions between healthcare professionals and individuals.

* Lack of Transparency in Healthcare Services:

    * Problem: Uncertainty and lack of transparency in healthcare procedures, causing trust issues between patients and healthcare providers.
    * Solution: Medicine Wallet promotes transparency by offering detailed information about healthcare professionals, fostering trust in the healthcare process.

* Challenges in Finding Specialized Healthcare Expertise:

    * Problem: Difficulty in locating healthcare professionals with specific expertise tailored to individual medical needs.
    * Solution: Medicine Wallet simplifies the process, enabling users to find specialized professionals relevant to their unique medical situations.

* Inefficient Patient-Doctor Interactions:

    * Problem: Time-consuming and inefficient methods of managing patient interactions and medical prescriptions.
    * Solution: Medicine Wallet streamlines these processes, enhancing efficiency and saving time for both healthcare professionals and patients.

* Limited Exposure for Healthcare Professionals:

    * Problem: Healthcare professionals face challenges in expanding their client base and gaining exposure.
    * Solution: Medicine Wallet empowers healthcare professionals by providing a platform for registration and visibility, connecting them with a broader audience in the healthcare ecosystem.

#
# 💻 **Built With**

<p align="center">

<img src = "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"  height=40px> 
<img src = "https://user-images.githubusercontent.com/63441472/190888196-9164551f-eb48-4da6-ab91-db17adad7c73.svg" height=40px>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" height=40px>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" height=40px>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" height=40px>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" height=40px>
          
</p>


#
# **Hall of Fame** ✨

We love our contributors! If you'd like to contribute anything from a bug-fix to a feature update, you can read our [CONTRIBUTING GUIDE](https://github.com/0LEUM/Medicine-Wallet/blob/main/CONTRIBUTING.md)

<br>

[![Contributors](https://contrib.rocks/image?repo=0LEUM/Medicine-Wallet)](https://github.com/0LEUM/Medicine-Wallet/graphs/contributors)

<p align="center">&mdash; 🩺  &mdash;</p>
<p align="center"><i>Medicine Wallet is <a href="https://github.com/0LEUM/Medicine-Wallet/blob/main/LICENSE">MIT License</a> code</i></p>