package meep_test

import (
	"testing"

	keepertest "github.com/octalmage/meep/testutil/keeper"
	"github.com/octalmage/meep/testutil/nullify"
	"github.com/octalmage/meep/x/meep"
	"github.com/octalmage/meep/x/meep/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MeepKeeper(t)
	meep.InitGenesis(ctx, *k, genesisState)
	got := meep.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
