//
//  MadeColorTests.swift
//  MadeDesignTokens
//
//  Created by Mastercard on 15/03/21.
//  Copyright © 2021 Mastercard. All rights reserved.
//
		

import XCTest
@testable import MadeDesignTokens

class MadeColorTests: XCTestCase {
    
    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testInitSucess() {
        let storage = MadeStorage(bundleName: "MadeDesignTokensBundle")
        let color = MadeColor(theme: .partnerbank, storage: storage)
        XCTAssertNotNil(color)
    }
    
    func testPartnerbankColors() {
        let storage = MadeStorage(bundleName: "MadeDesignTokensBundle")
        let color = MadeColor(theme: .partnerbank, storage: storage)
        
        XCTAssertNotNil(color.accent_01)
        XCTAssertEqual(color.accent_01.cgColor, createCGColor(red: 251, green: 133, blue: 60, alpha: 1))
        
        XCTAssertNotNil(color.accent_02)
        XCTAssertEqual(color.accent_02.cgColor, createCGColor(red: 121, green: 178, blue: 82, alpha: 1))
        
        XCTAssertNotNil(color.background)
        XCTAssertEqual(color.background.cgColor, createCGColor(red: 248, green: 248, blue: 248, alpha: 1))
        
        XCTAssertNotNil(color.decorative_01)
        XCTAssertEqual(color.decorative_01.cgColor, createCGColor(red: 240, green: 240, blue: 240, alpha: 1))
        
        XCTAssertNotNil(color.decorative_02)
        XCTAssertEqual(color.decorative_02.cgColor, createCGColor(red: 188, green: 188, blue: 188, alpha: 1))
        
        XCTAssertNotNil(color.disabled)
        XCTAssertEqual(color.disabled.cgColor, createCGColor(red: 104, green: 104, blue: 104, alpha: 1))
        
        XCTAssertNotNil(color.error)
        XCTAssertEqual(color.error.cgColor, createCGColor(red: 215, green: 55, blue: 60, alpha: 1))
        
        XCTAssertNotNil(color.on_background)
        XCTAssertEqual(color.on_background.cgColor, createCGColor(red: 40, green: 40, blue: 40, alpha: 1))
        
        XCTAssertNotNil(color.on_error)
        XCTAssertEqual(color.on_error.cgColor, createCGColor(red: 255, green: 255, blue: 255, alpha: 1))
        
        XCTAssertNotNil(color.on_primary)
        XCTAssertEqual(color.on_primary.cgColor, createCGColor(red: 255, green: 255, blue: 255, alpha: 1))
        
        XCTAssertNotNil(color.on_secondary)
        XCTAssertEqual(color.on_secondary.cgColor, createCGColor(red: 255, green: 255, blue: 255, alpha: 1))
        
        XCTAssertNotNil(color.on_surface)
        XCTAssertEqual(color.on_surface.cgColor, createCGColor(red: 40, green: 40, blue: 40, alpha: 1))
        
        XCTAssertNotNil(color.brand.primary)
        XCTAssertEqual(color.brand.primary.cgColor, createCGColor(red: 24, green: 168, blue: 134, alpha: 1))
        
        XCTAssertNotNil(color.brand.secondary)
        XCTAssertEqual(color.brand.secondary.cgColor, createCGColor(red: 43, green: 170, blue: 185, alpha: 1))
        
        XCTAssertNotNil(color.shadow)
        XCTAssertEqual(color.shadow.cgColor, createCGColor(red: 0, green: 0, blue: 0, alpha: 1))
        
        XCTAssertNotNil(color.surface)
        XCTAssertEqual(color.surface.cgColor, createCGColor(red: 255, green: 255, blue: 255, alpha: 1))
    }
    
    func createCGColor(red: CGFloat, green: CGFloat, blue: CGFloat, alpha: CGFloat) -> CGColor {
        let sp = CGColorSpace(name:CGColorSpace.sRGB)!
        let comps : [CGFloat] = [red/255, green/255, blue/255, alpha]
        return CGColor(colorSpace: sp, components: comps)!
    }
}

