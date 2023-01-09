//
//  MadeFontTests.swift
//  MadeDesignTokens
//
//  Created by Mastercard on 15/03/21.
//  Copyright © 2021 Mastercard. All rights reserved.
//
		

import XCTest
@testable import MadeDesignTokens

class MadeFontTests: XCTestCase {

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testInitSucess() {
        let storage = MadeStorage(bundleName: "MadeDesignTokensBundle")
        let font = MadeDefaultFont(storage: storage)
        XCTAssertNotNil(font)
    }
    
    func testUnrapNilFont() {
        let storage = MadeStorage(bundleName: "MadeDesignTokensBundle")
        let font = MadeDefaultFont(storage: storage)
        XCTAssertNotNil(font.unwrapFont(nil))
    }
    
    func testDefaultsFonts() {
        let storage = MadeStorage(bundleName: "MadeDesignTokensBundle")
        let font = MadeDefaultFont(storage: storage)
        
        XCTAssertNotNil(font.bold)
        XCTAssertEqual(font.bold.fontName, "MarkOffcForMC-Bold")
        
        XCTAssertNotNil(font.heavy)
        XCTAssertEqual(font.heavy.fontName, "MarkOffcForMC-Heavy")
        
        XCTAssertNotNil(font.light)
        XCTAssertEqual(font.light.fontName, "MarkOffcForMC-Light")
        
        XCTAssertNotNil(font.medium)
        XCTAssertEqual(font.medium.fontName, "MarkOffcForMC-Medium")
        
        XCTAssertNotNil(font.regular)
        XCTAssertEqual(font.regular.fontName, "MarkOffcForMC")
        
        XCTAssertNotNil(font.regular_nrw)
        XCTAssertEqual(font.regular_nrw.fontName, "MarkForMCNrw")
        
        XCTAssertNotNil(font.medium_nrw)
        XCTAssertEqual(font.medium_nrw.fontName, "MarkForMCNrw-Medium")
    }
}
