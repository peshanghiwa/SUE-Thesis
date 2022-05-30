export default async (context, locale) => {
  return await Promise.resolve({
    home: {
      title: "Salahaddin University Thesis",
      description:
        "Official salahaddin university thesis website, here you can find all the official Bachelor, PhD, and Masters research papers of the graduated students.",
      search: "Search",
      searchWithDots: "Search...",
      collagesTitle: "Salahaddin University Colleges",
      collages: {
        science: "College of Science",
        engineering: "College of Engineering",
        law: "College of Law",
        agriculture: "College of Agriculture",
        education: "College of Education",
        arts: "College of Arts",
        languages: "College of Languages",
        administrationAndEconomics: "College of Administration & Economics",
        basicEducation: "College of Basic Education",
        physicalEducation: "College of Physical Education",
        islamicScience: "College of Islamic Science",
        fineArts: "College of Fine Arts",
        educationShaqlawa: "College of Education Shaqlawa",
        educationMakhmur: "College of Education Makhmur",
        politicalScience: "College of Political Science",
      },
      thesisDegreeNewsTitle: "Latest Thesis Degrees",
      collageOf: "Collage Of",
      fullArticle: "See All Articles",
      seeFullArticle: "See Full Article",
      latestNews: "Latest News",
      thesisDegreeNewsTitle2: "About Salahaddin University",
      thesisDetail:
        " Salahaddin University-Erbil is one of the public higher education institution in the North of Iraq and especially Kurdistan region. It is located in Erbil, capital of the autonomous Kurdis Region of Iraq. Sulaimani University-Sulaimani was established in 1968.",
      mainWebsite: "SUE Main Website",
      footer: "@2022 Salahaddin University Thesis. All Rights Reserved.",
      notFound: "Page Not Found",
      pageName: "Salahaddin University Theses Website",
    },
    thesis: {
      title: "Search & Filter",
      searchPlaceholder: "Search...",
      allDegreesPlaceholder: "All Degrees",
      allDepartments: "All Departments",
      pageTitle: "Theses",
      pageName: "Salahaddin University Theses Website",
      pageDescription:
        "Salahaddin University Theses page, Filter by degree, department, collage, search, and more",
    },
    thesisDetail: {
      contactInfo: "Student Contact Info",
      name: "Name",
      email: "Email",
      phone: "Phone",
      similarResearches: "Similar Researches",
    },
  });
};
