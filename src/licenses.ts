import { License, LicenseAlias } from './types';

export const licenses: License[] = [
  {
    name: 'BSD 1-Clause License',
    description: {
      en: 'A simplified BSD license that requires only preservation of copyright notices for redistribution.',
      ja: '再配布時に著作権表示の保持のみを要求する簡略化されたBSDライセンスです。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['License and copyright notice'],
      ja: ['ライセンスと著作権表示'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'Microsoft Public License',
    description: {
      en: 'A permissive open source license created by Microsoft that allows for the distribution and modification of the software.',
      ja: 'Microsoftが作成した寛容なオープンソースライセンスで、ソフトウェアの配布と改変を許可します。',
    },
    permissions: {
      en: [
        'Commercial use',
        'Modification',
        'Distribution',
        'Private use',
        'Patent use',
      ],
      ja: ['商用利用', '改変', '配布', '私的利用', '特許使用'],
    },
    conditions: {
      en: ['License and copyright notice'],
      ja: ['ライセンスと著作権表示'],
    },
    limitations: {
      en: ['No liability', 'No warranty', 'No trademark use'],
      ja: ['免責', '無保証', '商標使用不可'],
    },
  },
  {
    name: 'Microsoft Reciprocal License',
    description: {
      en: 'A license created by Microsoft that requires source code of modifications to be shared when distributed.',
      ja: 'Microsoftが作成したライセンスで、配布時に改変されたソースコードの共有を要求します。',
    },
    permissions: {
      en: [
        'Commercial use',
        'Modification',
        'Distribution',
        'Private use',
        'Patent use',
      ],
      ja: ['商用利用', '改変', '配布', '私的利用', '特許使用'],
    },
    conditions: {
      en: ['Disclose source', 'License and copyright notice', 'Same license'],
      ja: ['ソースコードの公開', 'ライセンスと著作権表示', '同一ライセンス'],
    },
    limitations: {
      en: ['No liability', 'No warranty', 'No trademark use'],
      ja: ['免責', '無保証', '商標使用不可'],
    },
  },
  {
    name: 'MIT License',
    description: {
      en: 'A permissive license that is short and to the point. It lets people do anything with your code with proper attribution and without warranty.',
      ja: '短く簡潔な寛容なライセンスです。適切な帰属表示と無保証の下で、あなたのコードを自由に使用することができます。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['License and copyright notice'],
      ja: ['ライセンスと著作権表示'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'Apache License 2.0',
    description: {
      en: 'A permissive license that also provides an express grant of patent rights from contributors to users.',
      ja: '寛容なライセンスで、貢献者からユーザーへの特許権の明示的な付与も含まれています。',
    },
    permissions: {
      en: [
        'Commercial use',
        'Modification',
        'Distribution',
        'Patent use',
        'Private use',
      ],
      ja: ['商用利用', '改変', '配布', '特許使用', '私的利用'],
    },
    conditions: {
      en: ['License and copyright notice', 'State changes'],
      ja: ['ライセンスと著作権表示', '変更の記載'],
    },
    limitations: {
      en: ['No liability', 'No warranty', 'No trademark use'],
      ja: ['免責', '無保証', '商標使用不可'],
    },
  },
  {
    name: 'BSD 3-Clause License',
    description: {
      en: 'A permissive license with a clause that prohibits the use of the names of the project contributors to endorse or promote products derived from the software without prior permission.',
      ja: '事前の許可なしに、ソフトウェアから派生した製品を推奨または宣伝するためにプロジェクト貢献者の名前を使用することを禁じる条項を含む寛容なライセンスです。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['License and copyright notice', 'No endorsement clause'],
      ja: ['ライセンスと著作権表示', '承認禁止条項'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'BSD 2-Clause License',
    description: {
      en: 'A simplified BSD license that allows for redistribution and use with minimal restrictions.',
      ja: '再配布と利用を最小限の制限で許可する簡略化されたBSDライセンスです。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['License and copyright notice'],
      ja: ['ライセンスと著作権表示'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'Mozilla Public License 2.0',
    description: {
      en: 'A weak copyleft license that allows the covered source code to be mixed with other licenses.',
      ja: 'カバーされたソースコードを他のライセンスと混在させることを許容する弱いコピーレフトライセンスです。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['Disclose source', 'License and copyright notice'],
      ja: ['ソースコードの公開', 'ライセンスと著作権表示'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'GNU Lesser General Public License v3.0',
    description: {
      en: 'A license that allows developers to use and integrate open source software into their own projects without the obligation to release their own source code under the same terms.',
      ja: '開発者が自社のプロジェクトにオープンソースソフトウェアを統合できるようにするライセンスで、自身のソースコードを同じ条件で公開する義務はありません。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: [
        'License and copyright notice',
        'State changes',
        'Disclose source for modifications',
      ],
      ja: ['ライセンスと著作権表示', '変更の記載', '改変時のソース公開'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'GNU Affero General Public License v3.0',
    description: {
      en: 'A copyleft license that requires modified versions of the software to be made available to users over a network.',
      ja: '改変されたソフトウェアをネットワーク経由で利用するユーザーに対して、ソースコードの公開を要求するコピーレフトライセンスです。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['Disclose source', 'License and copyright notice'],
      ja: ['ソースコードの公開', 'ライセンスと著作権表示'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'Eclipse Public License 2.0',
    description: {
      en: 'A weak copyleft license used by the Eclipse Foundation, allowing the distribution of modifications and combined works under certain conditions.',
      ja: 'Eclipse Foundationが採用する弱いコピーレフトライセンスで、一定の条件の下で改変および結合作品の配布を許可します。',
    },
    permissions: {
      en: [
        'Commercial use',
        'Modification',
        'Distribution',
        'Patent use',
        'Private use',
      ],
      ja: ['商用利用', '改変', '配布', '特許使用', '私的利用'],
    },
    conditions: {
      en: [
        'License and copyright notice',
        'State changes',
        'Open source of modified files',
      ],
      ja: [
        'ライセンスと著作権表示',
        '変更の記載',
        '改変ファイルのオープンソース',
      ],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'Unlicense',
    description: {
      en: 'A license dedicated to releasing works into the public domain, relinquishing all copyright claims.',
      ja: '作品をパブリックドメインに置き、すべての著作権を放棄するためのライセンスです。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['None'],
      ja: ['なし'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'Zlib License',
    description: {
      en: 'A simple and permissive license ideal for small libraries, with minimal restrictions on usage.',
      ja: '小規模なライブラリに最適な、使用にほとんど制限のないシンプルで寛容なライセンスです。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['License and copyright notice'],
      ja: ['ライセンスと著作権表示'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'CC0 1.0 Universal',
    description: {
      en: 'A public domain dedication that allows creators to waive all rights and place works in the public domain.',
      ja: 'クリエーターがすべての権利を放棄し、作品をパブリックドメインに置くことを許可するパブリックドメイン宣言です。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['None'],
      ja: ['なし'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'Boost Software License 1.0',
    description: {
      en: 'A very permissive license with minimal restrictions that allows the use, reproduction, and distribution of software, provided the license text is included.',
      ja: '非常に寛容なライセンスで、ライセンス文書が含まれていることを条件に、ソフトウェアの使用、複製、配布を許可します。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['Include license text'],
      ja: ['ライセンス文書の同梱'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'ISC License',
    description: {
      en: 'A permissive license that is functionally similar to the BSD or MIT licenses, but simplified by removing language that is no longer necessary under the Berne Convention.',
      ja: 'BSDまたはMITライセンスと機能的に類似していますが、ベルヌ条約の下で不要になった文言を削除して簡略化された寛容なライセンスです。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['License and copyright notice'],
      ja: ['ライセンスと著作権表示'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'Common Development and Distribution License',
    description: {
      en: 'A license used by Sun Microsystems (now Oracle) for many of its open source projects. It is a weak copyleft license.',
      ja: 'Sun Microsystems（現Oracle）が多くのオープンソースプロジェクトで使用していたライセンスです。弱いコピーレフトライセンスです。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['Source code availability'],
      ja: ['ソースコードの可用性'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['無保証', '無責任'],
    },
  },
  {
    name: 'WTFPL',
    description: {
      en: 'Do What The F*ck You Want To Public License. This license allows you to do anything with the software, with no restrictions whatsoever.',
      ja: 'あなたが望むことをするパブリックライセンス。このライセンスは、ソフトウェアに対して何でも行うことを許可し、一切の制限はありません。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['None'],
      ja: ['なし'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'SIL Open Font License 1.1',
    description: {
      en: 'A free, open source license designed for fonts. It allows fonts to be freely used, studied, modified and redistributed as long as they are not sold by themselves.',
      ja: 'フォント用に設計された、無料のオープンソースライセンスです。フォント自体が販売されない限り、フォントを自由に使用、研究、修正、再配布できます。',
    },
    permissions: {
      en: [
        'Commercial use',
        'Modification',
        'Distribution',
        'Private use',
        'Embedding',
      ],
      ja: ['商用利用', '改変', '配布', '私的利用', '埋め込み'],
    },
    conditions: {
      en: ['License and copyright notice', 'Reserved Font Name'],
      ja: ['ライセンスと著作権表示', '予約済みフォント名'],
    },
    limitations: {
      en: ['No warranty'],
      ja: ['無保証'],
    },
  },
  {
    name: 'GNU General Public License, version 1',
    description: {
      en: 'The original version of the GNU GPL license, aimed at guaranteeing your freedom to share and change free software.',
      ja: 'GNU GPLライセンスの最初のバージョンで、フリーソフトウェアを共有および変更する自由を保証することを目的としています。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['Disclose source', 'License and copyright notice', 'State changes'],
      ja: ['ソースコードの公開', 'ライセンスと著作権表示', '変更の記載'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'GNU General Public License, version 2',
    description: {
      en: 'The second version of the GNU GPL license, aimed at guaranteeing your freedom to share and change free software.',
      ja: 'GNU GPLライセンスの第2版で、フリーソフトウェアを共有および変更する自由を保証することを目的としています。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['Disclose source', 'License and copyright notice', 'State changes'],
      ja: ['ソースコードの公開', 'ライセンスと著作権表示', '変更の記載'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'GNU General Public License, version 3',
    description: {
      en: 'A copyleft license that requires anyone who distributes your code or a derivative work to make the source available under the same terms.',
      ja: 'コードまたはその派生物を配布する際に、同じ条件でソースコードを公開することを要求するコピーレフトライセンスです。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['Disclosure of source', 'License and copyright notice'],
      ja: ['ソースコードの公開', 'ライセンスと著作権表示'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'CMU License',
    description: {
      en: 'A license created by Carnegie Mellon University, similar to the MIT license but with specific attribution requirements.',
      ja: 'カーネギーメロン大学によって作成されたライセンスで、MITライセンスに似ていますが、特定の帰属要件があります。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['License and copyright notice', 'State changes'],
      ja: ['ライセンスと著作権表示', '変更の記載'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'ICU License',
    description: {
      en: 'A permissive free software license used by the International Components for Unicode (ICU) library.',
      ja: 'Unicode (ICU) ライブラリの国際コンポーネントで使用されている寛容なフリーソフトウェアライセンスです。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['License and copyright notice'],
      ja: ['ライセンスと著作権表示'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'Jabber Open Source License',
    description: {
      en: 'A license created for the Jabber instant messaging protocol that was later superseded by other licenses.',
      ja: 'Jabberインスタントメッセージングプロトコル用に作成されたライセンスで、後に他のライセンスに置き換えられました。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['License and copyright notice', 'State changes'],
      ja: ['ライセンスと著作権表示', '変更の記載'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'Los Alamos National Labs BSD-3 Variant',
    description: {
      en: 'A variant of the BSD 3-Clause License specifically customized for software developed at Los Alamos National Laboratory.',
      ja: 'ロスアラモス国立研究所で開発されたソフトウェア向けにカスタマイズされたBSD 3条項ライセンスの変種です。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['License and copyright notice', 'No endorsement clause'],
      ja: ['ライセンスと著作権表示', '承認禁止条項'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'The OCLC Research Public License 2.0 License',
    description: {
      en: 'A license created by Online Computer Library Center (OCLC) for research software and projects.',
      ja: 'オンラインコンピュータライブラリセンター（OCLC）が研究ソフトウェアとプロジェクト向けに作成したライセンスです。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['License and copyright notice', 'State changes'],
      ja: ['ライセンスと著作権表示', '変更の記載'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
  {
    name: 'UNICODE LICENSE V3',
    description: {
      en: 'A license developed by the Unicode Consortium for the use and distribution of data files and software related to Unicode.',
      ja: 'Unicode関連のデータファイルとソフトウェアの使用と配布のためにUnicode Consortiumによって開発されたライセンスです。',
    },
    permissions: {
      en: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      ja: ['商用利用', '改変', '配布', '私的利用'],
    },
    conditions: {
      en: ['License and copyright notice'],
      ja: ['ライセンスと著作権表示'],
    },
    limitations: {
      en: ['No liability', 'No warranty'],
      ja: ['免責', '無保証'],
    },
  },
];

export const licenseAliases: LicenseAlias[] = [
  {
    name: 'BSD 1-Clause License',
    aliases: ['BSD-1', 'BSD 1', 'BSD1', 'BSD 1-Clause', 'BSD-1-Clause'],
  },
  {
    name: 'Microsoft Public License',
    aliases: ['MS-PL', 'MSPL', 'Microsoft PL'],
  },
  {
    name: 'Microsoft Reciprocal License',
    aliases: ['MS-RL', 'MSRL', 'Microsoft RL'],
  },
  {
    name: 'MIT License',
    aliases: ['MIT', 'mit', 'MIT license', 'mit license'],
  },
  {
    name: 'Apache License 2.0',
    aliases: [
      'Apache',
      'apache',
      'Apache 2.0',
      'apache2',
      'Apache2',
      'APL 2.0',
      'APL2',
    ],
  },
  {
    name: 'GNU General Public License, version 1',
    aliases: ['GPL-1.0', 'GPL1', 'GPLv1', 'GNU GPL v1', 'GPL 1.0'],
  },
  {
    name: 'GNU General Public License, version 2',
    aliases: ['GPL-2.0', 'GPL2', 'GPLv2', 'GNU GPL v2', 'GPL 2.0'],
  },
  {
    name: 'GNU General Public License, version 3',
    aliases: ['GPL', 'GPL3', 'GPLv3', 'GNU GPL', 'GNU GPLv3', 'GPL 3.0'],
  },
  {
    name: 'BSD 3-Clause License',
    aliases: ['BSD-3', 'BSD 3', 'BSD3', 'BSD 3-Clause', 'BSD-3-Clause'],
  },
  {
    name: 'BSD 2-Clause License',
    aliases: ['BSD-2', 'BSD 2', 'BSD2', 'BSD 2-Clause', 'BSD-2-Clause'],
  },
  {
    name: 'Mozilla Public License 2.0',
    aliases: ['MPL', 'MPL2', 'MPL 2.0', 'Mozilla', 'Mozilla 2.0'],
  },
  {
    name: 'GNU Lesser General Public License v3.0',
    aliases: ['LGPL', 'LGPL3', 'LGPLv3', 'GNU LGPL', 'GNU LGPLv3', 'LGPL 3.0'],
  },
  {
    name: 'GNU Affero General Public License v3.0',
    aliases: ['AGPL', 'AGPL3', 'AGPLv3', 'GNU AGPL', 'GNU AGPLv3', 'AGPL 3.0'],
  },
  {
    name: 'Eclipse Public License 2.0',
    aliases: ['EPL', 'EPL2', 'EPL 2.0', 'Eclipse', 'Eclipse 2.0'],
  },
  {
    name: 'Unlicense',
    aliases: ['The Unlicense', 'UNLICENSE', 'unlicense'],
  },
  {
    name: 'Zlib License',
    aliases: ['zlib', 'ZLIB', 'Zlib'],
  },
  {
    name: 'CC0 1.0 Universal',
    aliases: ['CC0', 'cc0', 'CC0 1.0', 'Creative Commons Zero'],
  },
  {
    name: 'Boost Software License 1.0',
    aliases: ['BSL', 'Boost', 'BSL 1.0', 'Boost 1.0'],
  },
  {
    name: 'ISC License',
    aliases: ['ISC', 'isc'],
  },
  {
    name: 'Common Development and Distribution License',
    aliases: ['CDDL', 'cddl'],
  },
  {
    name: 'WTFPL',
    aliases: ['WTFPL', 'wtfpl'],
  },
  {
    name: 'SIL Open Font License 1.1',
    aliases: ['OFL', 'SIL OFL'],
  },
  {
    name: 'CMU License',
    aliases: ['MIT-CMU', 'CMU MIT'],
  },
  {
    name: 'ICU License',
    aliases: ['ICU', 'ICU License'],
  },
  {
    name: 'Jabber Open Source License',
    aliases: ['JOSL', 'Jabber License'],
  },
  {
    name: 'Los Alamos National Labs BSD-3 Variant',
    aliases: ['LANL-BSD', 'LANL BSD', 'Los Alamos BSD'],
  },
  {
    name: 'The OCLC Research Public License 2.0 License',
    aliases: ['OCLC-2.0', 'OCLC 2.0', 'OCLC Research License'],
  },
  {
    name: 'UNICODE LICENSE V3',
    aliases: ['Unicode-3.0', 'Unicode License 3.0', 'Unicode-TOU'],
  },
];
