//
//  ViewController.swift
//  ios
//
//  Created by Kellett, Emma on 11/12/2020.
//  Copyright (c) 2020 Kellett, Emma. All rights reserved.
//

import UIKit
import MadeDesignTokens

class HomeVC: UIViewController {

    var dashboardItems = [String]()
    var tokenManager = MadeTokenManager(.partnerbank)
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        dashboardItems = ["Color Tokens", "Font Tokens"]
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

}

// MARK: UICollectionViewDataSource
extension HomeVC: UICollectionViewDataSource {

    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return self.dashboardItems.count
    }

    func numberOfSections(in collectionView: UICollectionView) -> Int {
        return 1
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "HomeCell", for: indexPath) as! HomeCell
        cell.titleLabel.text = self.dashboardItems[indexPath.item]
        cell.titleLabel.font = tokenManager.font.regular.withSize(tokenManager.fontSize.body)
        cell.borderView.isHidden = ((indexPath.item % 2) != 0)
        return cell
    }
}

// MARK: UICollectionViewDelegate
extension HomeVC: UICollectionViewDelegate {
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        self.performSegue(withIdentifier: self.dashboardItems[indexPath.item], sender: nil)
    }
}

// MARK: UICollectionViewDelegateFlowLayout
extension HomeVC: UICollectionViewDelegateFlowLayout {

    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        return CGSize(width: collectionView.bounds.width / 2, height: collectionView.bounds.height / 4)
    }
}

class HomeCell: UICollectionViewCell {

    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var borderView: UIView!

}
