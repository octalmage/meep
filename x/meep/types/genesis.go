package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # genesis/types/default
		TipList:      []*Tip{},
		UsernameList: []*Username{},
		ThreadList:   []*Thread{},
		PostList:     []*Post{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in tip
	tipIdMap := make(map[uint64]bool)

	for _, elem := range gs.TipList {
		if _, ok := tipIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for tip")
		}
		tipIdMap[elem.Id] = true
	}
	// Check for duplicated ID in username
	usernameIdMap := make(map[uint64]bool)

	for _, elem := range gs.UsernameList {
		if _, ok := usernameIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for username")
		}
		usernameIdMap[elem.Id] = true
	}
	// Check for duplicated ID in thread
	threadIdMap := make(map[uint64]bool)

	for _, elem := range gs.ThreadList {
		if _, ok := threadIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for thread")
		}
		threadIdMap[elem.Id] = true
	}
	// Check for duplicated ID in post
	postIdMap := make(map[uint64]bool)

	for _, elem := range gs.PostList {
		if _, ok := postIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for post")
		}
		postIdMap[elem.Id] = true
	}

	return nil
}
