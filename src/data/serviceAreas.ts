export interface ServiceAreaCourt {
  name: string;
  type: string;
  address: string;
  description: string;
  jurisdiction: string;
}

export interface ServiceAreaFaq {
  q: string;
  a: string;
}

export interface ServiceAreaRecord {
  slug: string;
  city: string;
  county: string;
  title: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  introHeading: string;
  introP1: string;
  introP2: string;
  courts: ServiceAreaCourt[];
  policeAgencies: string[];
  keyPracticeAreas: {
    title: string;
    description: string;
    href: string;
  }[];
  localInsights: {
    num: string;
    title: string;
    body: string;
  }[];
  mapQuery: string;
  faqs: ServiceAreaFaq[];
}

export const serviceAreas: ServiceAreaRecord[] = [
  {
    slug: 'ann-arbor',
    city: 'Ann Arbor',
    county: 'Washtenaw County',
    title: 'Ann Arbor Criminal Defense Attorney | Law Offices of Joseph A. Simon',
    metaDescription: 'Defending clients against OWI, drug, assault, domestic violence, and college student charges in Ann Arbor, MI. 40+ years appearing in the 15th District Court and 22nd Circuit Court.',
    heroEyebrow: 'Ann Arbor Criminal Defense',
    heroTitle: 'Criminal Defense Attorney in Ann Arbor, MI',
    heroSubtitle: 'Defending university students, residents, and visitors facing misdemeanor and felony charges throughout Ann Arbor and the University of Michigan campus for more than 40 years.',
    introHeading: 'Aggressive, local defense in Ann Arbor courts.',
    introP1: 'When you are arrested or charged with a crime in Ann Arbor, your case will proceed through either the 15th District Court in downtown Ann Arbor (for misdemeanors, OWI, and preliminary felony hearings) or the 22nd Circuit Court of Washtenaw County (for felony trials and sentencing). Having defended clients in these exact courtrooms for over four decades, attorney Joseph A. Simon understands the prosecutors, judges, and procedural nuances that can make the critical difference in your case.',
    introP2: 'Whether you are a University of Michigan student facing disciplinary and criminal consequences, a local professional facing a first-time OWI on Washtenaw Avenue, or someone accused of a serious felony, our firm provides aggressive, discreet, and tireless advocacy from day one.',
    courts: [
      {
        name: '15th District Court',
        type: 'District Court',
        address: '301 E. Huron Street, Ann Arbor, MI 48104',
        description: 'Handles all Ann Arbor city ordinance violations, misdemeanor offenses (including OWI, assault, petty theft, domestic violence), and the preliminary stages of felony cases.',
        jurisdiction: 'City of Ann Arbor'
      },
      {
        name: '22nd Circuit Court of Washtenaw County',
        type: 'Circuit Court',
        address: '101 E. Huron Street, Ann Arbor, MI 48104',
        description: 'Handles all felony criminal cases, trials, felony sentencing, and circuit-level appeals originating in Ann Arbor and across Washtenaw County.',
        jurisdiction: 'County-wide Jurisdiction'
      }
    ],
    policeAgencies: [
      'Ann Arbor Police Department (AAPD)',
      'University of Michigan Division of Public Safety and Security (DPSS)',
      'Washtenaw County Sheriff’s Office',
      'Michigan State Police (Brighton Post #12)'
    ],
    keyPracticeAreas: [
      {
        title: 'OWI & Drunk Driving Defense',
        description: 'Challenging breathalyzer calibration, field sobriety tests, and traffic stops on US-23, I-94, M-14, and city streets.',
        href: '/practice-area/drug-crimes/'
      },
      {
        title: 'U of M College Student Crimes',
        description: 'Protecting students from permanent criminal records and university disciplinary sanctions via HYTA and diversion programs.',
        href: '/practice-area/college-crimes-defense/'
      },
      {
        title: 'Assault & Domestic Violence',
        description: 'Defending against simple assault, aggravated assault, domestic battery, and obtaining bond condition modifications.',
        href: '/practice-area/assault-defense/'
      },
      {
        title: 'Drug Possession & Distribution',
        description: 'Scrutinizing Fourth Amendment search and seizure violations in vehicle searches, dorms, and private residences.',
        href: '/practice-area/drug-crimes/'
      },
      {
        title: 'Criminal Sexual Conduct (CSC)',
        description: 'High-stakes felony defense against 1st through 4th Degree CSC allegations requiring thorough factual and forensic investigation.',
        href: '/practice-area/sex-crime-defense/'
      },
      {
        title: 'Michigan Record Expungements',
        description: 'Utilizing Michigan Clean Slate legislation to clear qualifying misdemeanor and felony convictions from your public record.',
        href: '/practice-area/expungements/'
      }
    ],
    localInsights: [
      {
        num: '01',
        title: 'Immediate Evidence Preservation',
        body: 'We request and review downtown street camera footage, body-worn camera video from AAPD or DPSS, and dispatch logs before video is routinely overwritten.'
      },
      {
        num: '02',
        title: 'Student Status & HYTA Protection',
        body: 'Eligible defendants aged 18 to 25 can seek Holmes Youthful Trainee Act (HYTA) disposition to resolve felony or misdemeanor charges with no public conviction record.'
      },
      {
        num: '03',
        title: 'Direct Negotiation with Prosecutors',
        body: 'We work directly with the Ann Arbor City Attorney and Washtenaw County Prosecutor’s Office to seek charge reductions or dismissals before trial.'
      },
      {
        num: '04',
        title: '40+ Years of Local Courtroom Credibility',
        body: 'Deep familiarity with the 15th District Court judges and magistrates enables strategic positioning from the very first bond hearing.'
      }
    ],
    mapQuery: '15th District Court, 301 E Huron St, Ann Arbor, MI 48104',
    faqs: [
      {
        q: 'Where will my case be heard if I was arrested in Ann Arbor?',
        a: 'Misdemeanors and initial felony arraignments take place at the 15th District Court located at 301 E. Huron St. in the Ann Arbor Justice Center. If a felony case is bound over after a preliminary examination, it moves across the street to the 22nd Circuit Court at 101 E. Huron St.'
      },
      {
        q: 'What should a University of Michigan student do if arrested in Ann Arbor?',
        a: 'Do not make statements to DPSS or AAPD without legal counsel present. In addition to criminal court proceedings, students may face University OSCR (Office of Student Conflict Resolution) proceedings. We coordinate your criminal defense to protect both your freedom and your academic standing.'
      },
      {
        q: 'Can I keep a first-offense OWI or drug charge off my record in Ann Arbor?',
        a: 'Depending on the charge and your background, options such as MCL 333.7411 (for first-time drug possession), HYTA (for individuals under 26), or specialized treatment court programs may allow you to resolve the matter without a permanent conviction.'
      }
    ]
  },
  {
    slug: 'chelsea',
    city: 'Chelsea',
    county: 'Washtenaw County',
    title: 'Chelsea Criminal Defense Attorney | Law Offices of Joseph A. Simon',
    metaDescription: 'Experienced criminal defense representation in Chelsea, MI. Defending OWI, domestic disputes, drug charges, and felony offenses in 14A-3 District Court & 22nd Circuit Court.',
    heroEyebrow: 'Chelsea Criminal Defense',
    heroTitle: 'Criminal Defense Attorney in Chelsea, MI',
    heroSubtitle: 'Providing dedicated defense for individuals facing OWI, assault, domestic violence, and criminal charges throughout western Washtenaw County.',
    introHeading: 'Defending your rights and record in Chelsea, Michigan.',
    introP1: 'If you are charged with a crime in Chelsea or the surrounding townships (Sylvan, Lima, Lyndon, Waterloo), your case will typically be heard at the 14A-3 District Court in Chelsea or the 22nd Circuit Court in Ann Arbor. Attorney Joseph A. Simon brings over 40 years of dedicated criminal defense experience to every case.',
    introP2: 'Whether you were pulled over on I-94 or M-52 for suspected drunk driving, or are facing domestic violence allegations or property charges, prompt legal intervention is critical to challenging the evidence and protecting your future.',
    courts: [
      {
        name: '14A-3 District Court (Chelsea)',
        type: 'District Court',
        address: '122 S. 4th Avenue, Ann Arbor, MI 48104 (serving Chelsea & Western Washtenaw)',
        description: 'Handles misdemeanor offenses, preliminary hearings, and civil infractions originating in Chelsea, Dexter, and surrounding western county townships.',
        jurisdiction: 'Chelsea & Western Washtenaw County'
      },
      {
        name: '22nd Circuit Court of Washtenaw County',
        type: 'Circuit Court',
        address: '101 E. Huron Street, Ann Arbor, MI 48104',
        description: 'The trial court for all felony prosecutions originating in Chelsea and across Washtenaw County.',
        jurisdiction: 'County-wide Jurisdiction'
      }
    ],
    policeAgencies: [
      'Chelsea Police Department',
      'Washtenaw County Sheriff’s Office',
      'Michigan State Police'
    ],
    keyPracticeAreas: [
      {
        title: 'OWI & DUI Defense',
        description: 'Defending drivers stopped on I-94, M-52, and Chelsea roadways against first-time and repeat drunk driving charges.',
        href: '/practice-area/drug-crimes/'
      },
      {
        title: 'Domestic Violence & Assault',
        description: 'Protecting your rights against false or exaggerated allegations, with immediate motions to amend no-contact bond orders.',
        href: '/practice-area/domestic-violence-defense/'
      },
      {
        title: 'Drug Offenses',
        description: 'Challenging unlawful vehicle searches and traffic stops to protect against possession and distribution charges.',
        href: '/practice-area/drug-crimes/'
      },
      {
        title: 'Theft & Property Crimes',
        description: 'Defending retail fraud, malicious destruction of property, and larceny accusations in local western Washtenaw courts.',
        href: '/practice-area/theft-offenses/'
      }
    ],
    localInsights: [
      {
        num: '01',
        title: 'Targeted Traffic Stop Defense',
        body: 'We scrutinize the reasonable suspicion for vehicle stops along I-94 and M-52, challenging radar calibration and video footage.'
      },
      {
        num: '02',
        title: 'Early Intervention on Bond Conditions',
        body: 'We work rapidly to modify restrictive bond conditions such as no-contact orders and alcohol tether requirements.'
      },
      {
        num: '03',
        title: 'Alternative Sentencing & Diversion',
        body: 'We identify diversionary statutes to keep eligible client records clean without the stigma of a criminal conviction.'
      },
      {
        num: '04',
        title: 'Personalized Legal Strategy',
        body: 'You work directly with Joseph A. Simon, receiving customized representation built on four decades of trial readiness.'
      }
    ],
    mapQuery: 'Chelsea, MI 48118',
    faqs: [
      {
        q: 'Which court handles criminal charges arising in Chelsea, MI?',
        a: 'Misdemeanor charges and initial felony proceedings arising in Chelsea are handled by the 14A District Court system. Felony trials are heard at the Washtenaw County Trial Court (22nd Circuit Court) in downtown Ann Arbor.'
      },
      {
        q: 'What should I do if stopped for suspected drunk driving in Chelsea?',
        a: 'Be polite, provide your license, registration, and proof of insurance. You have the right to politely decline roadside field sobriety tests. If arrested, request to speak with attorney Joseph A. Simon immediately.'
      }
    ]
  },
  {
    slug: 'dexter',
    city: 'Dexter',
    county: 'Washtenaw County',
    title: 'Dexter Criminal Defense Attorney | Law Offices of Joseph A. Simon',
    metaDescription: 'Trusted criminal defense attorney serving Dexter, MI. Defending OWI, domestic violence, drug charges, and college-age offenses in Washtenaw County courts.',
    heroEyebrow: 'Dexter Criminal Defense',
    heroTitle: 'Criminal Defense Attorney in Dexter, MI',
    heroSubtitle: 'Skilled criminal defense representation for residents, young adults, and commuters facing charges in Dexter and Scio Township.',
    introHeading: 'Experienced legal representation for Dexter residents.',
    introP1: 'Nestled along the Huron River, the City of Dexter and surrounding Scio and Webster Townships see significant law enforcement patrol from the Washtenaw County Sheriff’s Office and Michigan State Police. Criminal cases in Dexter are processed through the 14A District Court system and the 22nd Circuit Court in Ann Arbor.',
    introP2: 'Attorney Joseph A. Simon has defended clients in Washtenaw County for over four decades. Whether facing an OWI on Dexter-Pinckney Road, an assault charge, or a sensitive personal investigation, we ensure your rights and reputation are defended vigorously.',
    courts: [
      {
        name: '14A-3 District Court',
        type: 'District Court',
        address: '122 S. 4th Avenue, Ann Arbor, MI 48104',
        description: 'Processes misdemeanor offenses, preliminary felony hearings, and traffic citations for Dexter and western Washtenaw County.',
        jurisdiction: 'Dexter & Surrounding Townships'
      },
      {
        name: '22nd Circuit Court of Washtenaw County',
        type: 'Circuit Court',
        address: '101 E. Huron Street, Ann Arbor, MI 48104',
        description: 'Hears all felony matters, major jury trials, and sentencing for Dexter and Washtenaw County cases.',
        jurisdiction: 'County-wide Jurisdiction'
      }
    ],
    policeAgencies: [
      'Washtenaw County Sheriff’s Office (Dexter Substation)',
      'Michigan State Police'
    ],
    keyPracticeAreas: [
      {
        title: 'OWI / Drunk Driving',
        description: 'Defending against High BAC, standard OWI, and drug-related driving charges on Huron River Drive and Dexter-Ann Arbor Rd.',
        href: '/practice-area/drug-crimes/'
      },
      {
        title: 'Domestic Disputes & No-Contact Orders',
        description: 'Prompt advocacy to protect your reputation, challenge domestic assault allegations, and lift home exclusions.',
        href: '/practice-area/domestic-violence-defense/'
      },
      {
        title: 'College & Young Adult Defense',
        description: 'Using HYTA and diversionary pathways to protect student educational futures and career opportunities.',
        href: '/practice-area/college-crimes-defense/'
      },
      {
        title: 'Police Investigations',
        description: 'Guiding you through pre-charge law enforcement questioning before formal charges can be authorized.',
        href: '/practice-area/police-investigations/'
      }
    ],
    localInsights: [
      {
        num: '01',
        title: 'Local Patrol Scrutiny',
        body: 'Sheriff patrols frequently monitor Huron River Drive and major arterial roads. We challenge the validity of initial traffic stops.'
      },
      {
        num: '02',
        title: 'Protecting Clean Records',
        body: 'We prioritize keeping your public criminal history clean through negotiated dismissals, diversion programs, and HYTA.'
      },
      {
        num: '03',
        title: 'Direct Client Communication',
        body: 'Our office provides transparent, 24/7 availability for urgent bond hearings and emergency legal consultations.'
      },
      {
        num: '04',
        title: '40+ Years Courtroom Track Record',
        body: 'Decades of trial preparation and courtroom advocacy ensure prosecutors take your defense seriously from day one.'
      }
    ],
    mapQuery: 'Dexter, MI 48130',
    faqs: [
      {
        q: 'Who polices the City of Dexter?',
        a: 'Dexter contracts with the Washtenaw County Sheriff’s Office for dedicated police services, supplemented by the Michigan State Police.'
      },
      {
        q: 'Where will my Dexter court date be held?',
        a: 'Misdemeanor court dates and preliminary hearings take place in the 14A District Court, while felony trials are held at the 22nd Circuit Court in downtown Ann Arbor.'
      }
    ]
  },
  {
    slug: 'milan',
    city: 'Milan',
    county: 'Washtenaw & Monroe Counties',
    title: 'Milan Criminal Defense Attorney | Law Offices of Joseph A. Simon',
    metaDescription: 'Aggressive criminal defense in Milan, MI. Defending OWI, US-23 highway stops, domestic violence, and drug charges across Washtenaw & Monroe County courts.',
    heroEyebrow: 'Milan Criminal Defense',
    heroTitle: 'Criminal Defense Attorney in Milan, MI',
    heroSubtitle: 'Defending clients against misdemeanor and felony charges along the US-23 corridor and throughout the Milan community.',
    introHeading: 'Dedicated defense in Milan and southern Washtenaw County.',
    introP1: 'Straddling Washtenaw and Monroe Counties, Milan sees heavy traffic along US-23, resulting in frequent traffic stops, OWI arrests, and drug investigations. Cases arising in the Washtenaw portion of Milan are heard in the 14A-4 District Court in Saline and the 22nd Circuit Court in Ann Arbor.',
    introP2: 'With more than 40 years of focused criminal defense experience, attorney Joseph A. Simon understands how to challenge highway stops, investigate police procedures, and fight for the best possible outcome in your case.',
    courts: [
      {
        name: '14A-4 District Court (Saline/Milan)',
        type: 'District Court',
        address: '1000 N. Maple Road, Saline, MI 48176',
        description: 'Serves Milan, Saline, and southern Washtenaw County for misdemeanors, traffic offenses, and preliminary felony stages.',
        jurisdiction: 'Milan, Saline & Southern Washtenaw'
      },
      {
        name: '22nd Circuit Court of Washtenaw County',
        type: 'Circuit Court',
        address: '101 E. Huron Street, Ann Arbor, MI 48104',
        description: 'Trial court for felony cases and appeals in Washtenaw County.',
        jurisdiction: 'County-wide Jurisdiction'
      }
    ],
    policeAgencies: [
      'Milan Police Department',
      'Washtenaw County Sheriff’s Office',
      'Monroe County Sheriff’s Office',
      'Michigan State Police (Brighton & Monroe Posts)'
    ],
    keyPracticeAreas: [
      {
        title: 'US-23 OWI & Traffic Stops',
        description: 'Challenging high-speed highway stops, search protocols, and chemical blood/breath testing procedures.',
        href: '/practice-area/drug-crimes/'
      },
      {
        title: 'Drug Offenses & Seizures',
        description: 'Defending against possession, transportation, and delivery charges arising from highway interdiction stops.',
        href: '/practice-area/drug-crimes/'
      },
      {
        title: 'Domestic Assault Defense',
        description: 'Defending against domestic violence charges and securing modifications to restrictive no-contact orders.',
        href: '/practice-area/domestic-violence-defense/'
      },
      {
        title: 'Expungement of Prior Records',
        description: 'Clearing old convictions under Michigan Clean Slate laws so past mistakes don’t hinder employment.',
        href: '/practice-area/expungements/'
      }
    ],
    localInsights: [
      {
        num: '01',
        title: 'Highway Interdiction Scrutiny',
        body: 'We analyze highway stop durations and canine sniff delays to uncover Fourth Amendment search violations.'
      },
      {
        num: '02',
        title: 'Cross-County Jurisdictional Experience',
        body: 'We navigate the jurisdictional boundaries between Washtenaw and Monroe County law enforcement and courts.'
      },
      {
        num: '03',
        title: 'Proactive Case Building',
        body: 'We gather independent evidence, witness statements, and dashcam recordings immediately following an arrest.'
      },
      {
        num: '04',
        title: 'Decades of Proven Results',
        body: 'Over 40 years of courtroom success providing skilled, compassionate, and results-driven criminal defense.'
      }
    ],
    mapQuery: 'Milan, MI 48160',
    faqs: [
      {
        q: 'Which court has jurisdiction over an arrest in Milan, MI?',
        a: 'For offenses occurring in the Washtenaw County portion of Milan, misdemeanor cases go to the 14A-4 District Court in Saline, and felony cases proceed to the 22nd Circuit Court in Ann Arbor.'
      },
      {
        q: 'What should I do if arrested on US-23 near Milan?',
        a: 'Exercise your constitutional right to remain silent and do not consent to searches of your vehicle or electronic devices. Contact our office immediately at (734) 887-6200.'
      }
    ]
  },
  {
    slug: 'saline',
    city: 'Saline',
    county: 'Washtenaw County',
    title: 'Saline Criminal Defense Attorney | Law Offices of Joseph A. Simon',
    metaDescription: 'Trusted Saline, MI criminal defense attorney. Defending OWI, assault, domestic violence, drug offenses, and retail fraud in 14A-4 District Court & 22nd Circuit Court.',
    heroEyebrow: 'Saline Criminal Defense',
    heroTitle: 'Criminal Defense Attorney in Saline, MI',
    heroSubtitle: 'Defending Saline residents and drivers against misdemeanor and felony criminal charges with 40+ years of Washtenaw County courtroom experience.',
    introHeading: 'Experienced criminal defense in Saline, Michigan.',
    introP1: 'If you are facing criminal charges in Saline, your case will be heard right in town at the 14A-4 District Court on North Maple Road (for misdemeanors and preliminary hearings) or the 22nd Circuit Court in Ann Arbor (for felonies). Attorney Joseph A. Simon has represented clients in the Saline district court for decades.',
    introP2: 'From drunk driving stops along Michigan Avenue (US-12) to domestic violence allegations and youth offenses, our firm delivers thorough, strategic defense designed to protect your liberty, driver’s license, and clean record.',
    courts: [
      {
        name: '14A-4 District Court (Saline)',
        type: 'District Court',
        address: '1000 N. Maple Road, Saline, MI 48176',
        description: 'The local district court for Saline, Milan, and surrounding townships, hearing all misdemeanor trials, arraignments, and preliminary felony exams.',
        jurisdiction: 'Saline & Southern Washtenaw'
      },
      {
        name: '22nd Circuit Court of Washtenaw County',
        type: 'Circuit Court',
        address: '101 E. Huron Street, Ann Arbor, MI 48104',
        description: 'Hears all felony trials, pleas, and sentencing for Saline cases.',
        jurisdiction: 'County-wide Jurisdiction'
      }
    ],
    policeAgencies: [
      'Saline Police Department',
      'Washtenaw County Sheriff’s Office',
      'Michigan State Police'
    ],
    keyPracticeAreas: [
      {
        title: 'OWI / Impaired Driving Defense',
        description: 'Scrutinizing Michigan Avenue and Saline-Ann Arbor Road traffic stops, field sobriety tests, and Datamaster breathalyzer tests.',
        href: '/practice-area/drug-crimes/'
      },
      {
        title: 'Domestic Violence & Assault Charges',
        description: 'Investigating witness credibility, background context, and fighting for immediate dismissal or diversion options.',
        href: '/practice-area/domestic-violence-defense/'
      },
      {
        title: 'Drug Possession & Prescription Offenses',
        description: 'Defending against controlled substance allegations, utilizing MCL 333.7411 deferral when advantageous.',
        href: '/practice-area/drug-crimes/'
      },
      {
        title: 'Juvenile & College Student Defense',
        description: 'Safeguarding young adults and students under the Holmes Youthful Trainee Act (HYTA) for complete record sealing.',
        href: '/practice-area/college-crimes-defense/'
      }
    ],
    localInsights: [
      {
        num: '01',
        title: '14A-4 District Court Familiarity',
        body: 'Extensive familiarity with local Saline district court procedures, judges, and prosecuting attorneys ensures strong strategic guidance.'
      },
      {
        num: '02',
        title: 'Preserving Driving Privileges',
        body: 'We fight OWI driver license sanctions, seeking hardship licensing and challenging implied consent suspensions.'
      },
      {
        num: '03',
        title: 'Evidence-First Approach',
        body: 'We examine body cameras, dash cameras, and calibration records of chemical testing instruments before formulating our defense.'
      },
      {
        num: '04',
        title: '24/7 Availability',
        body: 'Arrests happen at all hours. Joseph A. Simon is available around the clock to provide immediate guidance during police questioning.'
      }
    ],
    mapQuery: '14A-4 District Court, 1000 N Maple Rd, Saline, MI 48176',
    faqs: [
      {
        q: 'Where is the court located in Saline, Michigan?',
        a: 'The 14A-4 District Court is located at 1000 N. Maple Road in Saline. It handles all local misdemeanor matters and preliminary felony proceedings.'
      },
      {
        q: 'Can a first-time domestic violence charge in Saline be kept off my record?',
        a: 'Under Michigan’s MCL 769.4a statute, eligible first-time domestic violence offenders may plead without a judgment of guilt entered, resulting in dismissal upon successful completion of probation.'
      }
    ]
  },
  {
    slug: 'ypsilanti',
    city: 'Ypsilanti',
    county: 'Washtenaw County',
    title: 'Ypsilanti Criminal Defense Attorney | Law Offices of Joseph A. Simon',
    metaDescription: 'Aggressive Ypsilanti criminal defense attorney defending EMU students, residents, and drivers in 14B District Court, 14A-2 District Court & 22nd Circuit Court. 40+ years experience.',
    heroEyebrow: 'Ypsilanti Criminal Defense',
    heroTitle: 'Criminal Defense Attorney in Ypsilanti, MI',
    heroSubtitle: 'Defending Eastern Michigan University students, township residents, and drivers against criminal charges in Ypsilanti for more than 40 years.',
    introHeading: 'Tireless criminal defense in Ypsilanti courts.',
    introP1: 'Ypsilanti criminal charges are handled by two distinct district courts: the 14A-2 District Court (serving the City of Ypsilanti) and the 14B District Court (serving Ypsilanti Township), as well as the 22nd Circuit Court in Ann Arbor for all felony matters. Navigating the specific procedures of these courts requires an attorney with seasoned local experience.',
    introP2: 'Attorney Joseph A. Simon has represented thousands of clients across Ypsilanti and Washtenaw County, defending against OWI on I-94 and Washtenaw Avenue, EMU student campus crimes, weapons offenses, assault, drug distribution, and serious felonies.',
    courts: [
      {
        name: '14B District Court (Ypsilanti Township)',
        type: 'District Court',
        address: '7200 S. Huron River Drive, Ypsilanti, MI 48197',
        description: 'Handles all misdemeanor cases, traffic offenses, and preliminary examinations arising within Ypsilanti Township.',
        jurisdiction: 'Ypsilanti Township'
      },
      {
        name: '14A-2 District Court (City of Ypsilanti)',
        type: 'District Court',
        address: '415 W. Michigan Avenue, Ypsilanti, MI 48197',
        description: 'Processes misdemeanors, city ordinance violations, and initial felony proceedings for the City of Ypsilanti.',
        jurisdiction: 'City of Ypsilanti'
      },
      {
        name: '22nd Circuit Court of Washtenaw County',
        type: 'Circuit Court',
        address: '101 E. Huron Street, Ann Arbor, MI 48104',
        description: 'The trial court for all felony charges arising across Ypsilanti and Washtenaw County.',
        jurisdiction: 'County-wide Jurisdiction'
      }
    ],
    policeAgencies: [
      'Ypsilanti Police Department',
      'Eastern Michigan University Police Department (EMU PD)',
      'Washtenaw County Sheriff’s Office',
      'Michigan State Police'
    ],
    keyPracticeAreas: [
      {
        title: 'EMU Campus & Student Crimes',
        description: 'Defending Eastern Michigan University students against criminal charges and university student conduct proceedings.',
        href: '/practice-area/college-crimes-defense/'
      },
      {
        title: 'OWI & High-BAC Defense',
        description: 'Challenging stops on I-94, Michigan Ave, and Washtenaw Ave, attacking breath and blood testing reliability.',
        href: '/practice-area/drug-crimes/'
      },
      {
        title: 'Weapons & Firearm Offenses',
        description: 'Defending carrying concealed weapons (CCW), felony firearm, and unlawful discharge allegations.',
        href: '/practice-area/assault-defense/'
      },
      {
        title: 'Assault & Domestic Violence',
        description: 'Thoroughly investigating contested witness claims and seeking dismissal or favorable resolution.',
        href: '/practice-area/domestic-violence-defense/'
      },
      {
        title: 'Drug Distribution & Possession',
        description: 'Challenging illegal traffic stops, search warrants, and search protocols in local drug prosecutions.',
        href: '/practice-area/drug-crimes/'
      },
      {
        title: 'Felony Defense in 22nd Circuit Court',
        description: 'Strategic trial defense against serious felony indictments carrying potential prison sentences.',
        href: '/practice-area/homicide-defense/'
      }
    ],
    localInsights: [
      {
        num: '01',
        title: '14B & 14A-2 District Court Mastery',
        body: 'Decades of regular appearances before Ypsilanti judges provide unparalleled insight into local sentencing standards.'
      },
      {
        num: '02',
        title: 'Protecting EMU Student Futures',
        body: 'We utilize HYTA (Holmes Youthful Trainee Act) and student diversion programs to safeguard graduation and job prospects.'
      },
      {
        num: '03',
        title: 'Challenging Police Conduct',
        body: 'We meticulously review body cameras from Ypsilanti PD and EMU Police to uncover Fourth and Fifth Amendment violations.'
      },
      {
        num: '04',
        title: 'Available 24/7 for Jail Arraignments',
        body: 'Quick response for weekend and holiday bond determinations at the Washtenaw County Jail.'
      }
    ],
    mapQuery: '14B District Court, 7200 S Huron River Dr, Ypsilanti, MI 48197',
    faqs: [
      {
        q: 'Which court will hear my case in Ypsilanti?',
        a: 'Cases originating in the City of Ypsilanti are heard at 14A-2 District Court, while cases in Ypsilanti Township go to 14B District Court on Huron River Drive. Felony trials for both jurisdictions are held at the 22nd Circuit Court in downtown Ann Arbor.'
      },
      {
        q: 'What should an EMU student do if charged with a crime in Ypsilanti?',
        a: 'Contact criminal defense attorney Joseph A. Simon immediately before talking to campus police or university administrators. We help protect your court record and navigate any parallel university disciplinary hearings.'
      },
      {
        q: 'Can a felony charge in Ypsilanti be reduced to a misdemeanor?',
        a: 'Yes. Through preliminary exam negotiations, suppression motions, and aggressive defense advocacy, we frequently negotiate felony charges down to misdemeanors or pursue complete dismissal.'
      }
    ]
  }
];
