//
//  MadeFontSizeTests.swift
//  MadeDesignTokens
//
//  Created by Mastercard on 15/03/21.
//  Copyright © 2021 Mastercard. All rights reserved.
//
		

import XCTest
@testable import MadeDesignTokens

class MadeFontSizeTests: XCTestCase {

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testSpacingForPartnerBank() {
        let fontSizes = PartnerbankFontSize()
        
        XCTAssertEqual(fontSizes.body, 14)
        XCTAssertEqual(fontSizes.button, 16)
        XCTAssertEqual(fontSizes.callout, 14)
        XCTAssertEqual(fontSizes.caption_medium, 12)
        XCTAssertEqual(fontSizes.caption_default, 12)
        XCTAssertEqual(fontSizes.caption_small, 11)
        XCTAssertEqual(fontSizes.headline, 40)
        XCTAssertEqual(fontSizes.small, 8)
        XCTAssertEqual(fontSizes.title_1, 28)
        XCTAssertEqual(fontSizes.title_2, 24)
        XCTAssertEqual(fontSizes.title_3, 20)
        XCTAssertEqual(fontSizes.title_4, 16)
        XCTAssertEqual(fontSizes.title_5, 13)
        XCTAssertEqual(fontSizes.title_large, 32)
    }
}
